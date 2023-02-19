# Need to downgrade to flask-2.1.3
from flask import Flask, request, Response, send_from_directory
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
'''
app.config['UPLOAD_FOLDER']= app.root_path
@app.route('/upload_pdf/<path:filename>', methods=['GET', 'POST'])
def download(filename):
    print(filename)
    uploads = os.path.join(app.root_path, app.config['UPLOAD_FOLDER'])
    print(os.listdir())
    print(uploads)
    return send_from_directory(directory=uploads, path=filename)


# # Write an api to retrieve a request to download a pdf









# @app.route("/file", methods = ['POST'])
# def fileInputRoute():
#   requested_file = request.args.get('file')
#   return requested_file
  


if __name__ == "__main__":
  app.run(debug=True)