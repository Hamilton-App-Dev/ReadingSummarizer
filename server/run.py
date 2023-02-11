# Need to downgrade to flask-2.1.3
from flask import Flask, request, Response
import json
import app.summarize as summarize

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
  bullet_count = summarize.get_bullet_estimate("loremm ipsum")
  json_response = Response(json.dumps({
    "status": True,
    "code": 200,
    "bullets": bullet_count
  }), mimetype="application/json")
  
  return json_response

@app.route("/file", methods = ['POST'])
def fileInputRoute():
  requested_file = request.args.get('file')
  return requested_file
  


if __name__ == "__main__":
  app.run(debug=True)