import openai
import os
import math

class Summarizer:
    
    @classmethod
    def askGPT(self,text):
        '''
        Desc: Returns a string with your summary attached
        Params: 
            text:str
        '''
        openai.api_key = os.getenv("OPENAI_API_KEY")
        bullet_count = self.get_bullet_estimate(text) 
        response = openai.Completion.create(
            # text-ada-001 -> cheaper but faster
            # text-davinci-003 -> Better quality more expensive
            engine = "text-davinci-003",
            prompt = f'Summarize this text in {bullet_count} bullets {text}',
            temperature = 0.6,
            max_tokens = 150,
            )
        return response.choices[0].text

    
    def main1(self):
        pass


def get_bullet_estimate(text):
    '''
    Desc: Estimate the # of bullets needed to summarize the entire text
    Params: 
        text:str
    Returns:
        bullet_count:int
    '''
    word_count = len(text.split(' '))
    bullet_count = math.ceil(word_count / 150)
    return bullet_count


# Will return a stirng summary of text arguemnt
def summarizeReading(text):
    summaryBot = Summarizer()
    return summaryBot.askGPT(text)