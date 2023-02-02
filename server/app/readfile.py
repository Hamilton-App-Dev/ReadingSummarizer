
#
# Input is a FileStorage Flask Object
# 

def readFile(file):
  return file.storage.read()