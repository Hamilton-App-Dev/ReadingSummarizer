import fitz, os

'''
Input: Name of pdf
Will create a directory with same name as pdf file
saves each page to directory with this format: page_i.png for i in 0..n

EXAMPLE saveImage('[fileName].pdf')
'''
def saveImage(fileName):
    dirName = fileName[:-4]
    os.mkdir(dirName) # chops off .pdf for naem of directory
    fname = fileName
    doc = fitz.open(fname)  # open document
    for page in doc:  # iterate through the pages
        pix = page.get_pixmap()  # render page to an image
        pix.save(dirName +"/page_%i.png" % page.number)  # store image as a PNG

