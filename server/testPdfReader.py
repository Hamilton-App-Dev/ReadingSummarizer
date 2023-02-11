import app.PDFImgToText as imgToText
import app.PDFtoImg as pdfToImg
import os, os.path

pdfName = 'danceReading.pdf' # Change to the name of the pdf you want to test
dirName = pdfName[:-4]
pdfToImg.saveImage(pdfName)
numOfPages = len([name for name in os.listdir(dirName)])

# directory paths to each image
paths = ['./{}/page_{}.png'.format(dirName, i) for i in range(numOfPages)]
print(imgToText.read_images(paths))



