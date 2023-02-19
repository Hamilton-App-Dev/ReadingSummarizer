# Need to downgrade to flask-2.1.3
from flask import Flask, request, Response, send_from_directory, abort, redirect, url_for
import json
import app.summarize as summarize
import os

app = Flask(__name__)

@app.route("/")
def hello():
  return Response(json.dumps({
    "status": True,
    "code": 200,
    "message": "Its Working!"}), mimetype="application/json")


'''
API endpint for local development
http://127.0.0.1:5000/summarize

Needs params to know what text to summarize
"readingText" : <text from your reading>
'''
@app.route("/summarize", methods = ['GET'])
def summarizeRoute():
  readingText = request.args.get('readingText')
  summary = summarize.summarizeReading(readingText)

  return summary

@app.route("/get_bullets", methods = ['GET'])
def BulletCountRoute():
  readingText = request.args.get('readingText')
  bullet_count = summarize.Summarizer().get_bullet_estimate(readingText)
  json_response = Response(json.dumps({
    "status": True,
    "code": 200,
    "bullets": bullet_count
  }), mimetype="application/json")
  
  return json_response

'''
API to upload a pdf
POST http://127.0.0.1:5000/upload
attach file to request
'''
app.config['UPLOAD_FOLDER']= app.root_path
@app.route('/upload', methods=['POST'])
def upload_file():
    try:
      file = request.files['file']
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
      print(os.listdir())
      return redirect(url_for('download', filename=file.filename))
    except:
      return redirect(url_for('error'))
  


if __name__ == "__main__":
  app.run(debug=True)