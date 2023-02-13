import app.PDFImgToText as imgToText
import app.PDFtoImg as pdfToImg
import app.chunkText as chunkText
import app.summarize as summarize
import os
'''
Need to type in terminal:
export OPENAI_API_KEY='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'
'''

pdfName = 'archReading.pdf' # Change to the name of the pdf you want to test
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
# Summarize each chunk
for chunk in chunks:
    print(summarize.summarizeReading(chunk))
