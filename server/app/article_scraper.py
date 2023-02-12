from urllib.request import urlopen, Request
from bs4 import BeautifulSoup


def get_article(url):
    '''
    Desc: Scrape the text from a given link (paragraphs).
         Tested links: Wallstreet Journal
    PARAMS:
        link:str
    RETURNS:
        text:str
    '''
    request_obj = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html_page = urlopen(request_obj)
    soup = BeautifulSoup(html_page, "html.parser")
    extracted_text = ''
    paragraphs = soup.find('article').find("div").find_all('p')
    if not paragraphs:
        paragraphs = soup.find_all('p')
    
    for paragraph in paragraphs:
        extracted_text += paragraph.text

    return extracted_text