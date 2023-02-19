from flask import Flask, request, Response, abort
import json, os, shutil
import app.summarize as summarize
import app.PDFImgToText as imgToText
import app.PDFtoImg as pdfToImg
import app.chunkText as chunkText


app = Flask(__name__)

@app.route("/")
def hello():
  return Response(json.dumps({
    "status": True,
    "code": 200,
    "message": "Its Working!"}), mimetype="application/json")

'''
API endpint for local development
http://127.0.0.1:5000/summarizeText

Needs params to know what text to summarize
"readingText" : <text from your reading>
'''
@app.route("/summarizeText", methods = ['GET'])
def summarizeRoute():
  try:
    readingText = request.args.get('readingText')
    summary = summarize.summarizeReading(readingText)
    json_response = Response(json.dumps({
      "status": True,
      "code": 200,
      "summary": summary
    }), mimetype="application/json")
    return json_response
  except:
    return abort(404)

'''
Api endpoint to get the bullet count
'''
@app.route("/get_bullets", methods = ['GET'])
def BulletCountRoute():
  try:
    readingText = request.args.get('readingText')
    bullet_count = summarize.Summarizer().get_bullet_estimate(readingText)
    json_response = Response(json.dumps({
      "status": True,
      "code": 200,
      "bullets": bullet_count
    }), mimetype="application/json")
    return json_response
  except:
    return abort(404)

'''
API to upload a pdf
POST http://127.0.0.1:5000/uploadPDF
attach file to request: file : <pdf file>
response will be a json with the summary
'''
app.config['UPLOAD_FOLDER']= app.root_path
@app.route('/uploadPDF', methods=['POST'])
def upload_file():
    try:
      file = request.files['file']
      pdfName = file.filename
      file.save(os.path.join(app.config['UPLOAD_FOLDER'], pdfName))
      print('{} was saved!'.format(pdfName))
      # return redirect(url_for('download', filename=file.filename))
      dirName = pdfName[:-4]
      # Turn pdf into images
      pdfToImg.saveImage(pdfName)
      numOfPages = len([name for name in os.listdir(dirName)])
      # directory paths to each image
      paths = ['./{}/page_{}.png'.format(dirName, i) for i in range(numOfPages)]
      # Translate images into text
      readingText = imgToText.read_images(paths)
      # Break text into chunks
      chunks = chunkText.getChunks(readingText)
      summaryChunks = []
      # Summarize each chunk
      for chunk in chunks:
          summaryChunks.append(summarize.summarizeReading(chunk))
      print('Summarized parts for {}!'.format(pdfName))
      shutil.rmtree(dirName)
      os.remove(pdfName)
      print('Deleted {}!'.format(dirName))
      # Sends a resopnse with summary attached
      json_response = Response(json.dumps({
      "status": True,
      "code": 200,
      "summary": ''.join(summaryChunks)
      }), mimetype="application/json")
      return json_response
    except:
      return abort(404)
  


if __name__ == "__main__":
  app.run(debug=True)