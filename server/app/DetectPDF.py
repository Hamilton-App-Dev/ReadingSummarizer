import pdfplumber
def DetectPDF(file_name):
    with pdfplumber.open(file_name) as doc:
        page = doc.pages[0]
        text = page.extract_text()
        if not text:
            return False
    


    return True

