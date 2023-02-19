import fitz 

MAT = fitz.Matrix(5,5)

# Helper function to OCR a span of text using Tesseract (applied for invalid characters).
# @param page: fitz.Page
# @param bbox: fitz.Rect
# @return: string of text from bbox

def _get_tessocr(page, bbox):
    """Return OCR-ed span text using Tesseract.
    Args:
        page: fitz.Page
        bbox: fitz.Rect or its tuple
    Returns:
        The OCR-ed text of the bbox.
    """
    global tess, MAT
    # Step 1: Make a high-resolution image of the bbox.
    pix = page.get_pixmap(
        matrix= MAT,
        clip=bbox,
    )
    ocrpdf = fitz.open("pdf", pix.pdfocr_tobytes())
    ocrpage = ocrpdf[0]
    text = ocrpage.get_text()
    if text.endswith("\n"):
        text = text[:-1]
    return text

# Parse a pdf file and return all text from it.
# @param file_path: path to pdf file
# @return: string of all text from pdf
def pdfParse(file_path : str):
   doc = fitz.open(file_path)
   all_text = ""
   ocr_count = 0
   for page in doc:
         blocks = page.get_text("dict", flags=0)["blocks"]
         for b in blocks:
            for l in b["lines"]:
                  for s in l["spans"]:
                     text = s["text"]
                     if chr(65533) in text:  # invalid characters encountered!
                        # invoke OCR
                        ocr_count += 1
                        text1 = text.lstrip()
                        sb = " " * (len(text) - len(text1))  # leading spaces
                        text1 = text.rstrip()
                        sa = " " * (len(text) - len(text1))  # trailing spaces
                        new_text = sb + _get_tessocr(page, s["bbox"]) + sa
                     all_text += text + chr(32)
   return all_text 

