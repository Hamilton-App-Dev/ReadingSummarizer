import openai
import os

class Summarizer:
    
    # Returns a string with your summary attached
    @classmethod
    def askGPT(self,text):
        global response
        openai.api_key = os.getenv("OPENAI_API_KEY")
        response = openai.Completion.create(
            # text-ada-001 -> cheaper but faster
            # text-davinci-003 -> Better quality more expensive
            engine = "text-davinci-003",
            prompt = 'Summarize this text in 3 bullets {}'.format(text),
            temperature = 0.6,
            max_tokens = 150,
            )
        # Returns a string
        return response.choices[0].text
    
    def main1(self):
        pass

# Will return a stirng summary of text arguemnt
def summarizeReading(text):
    summaryBot = Summarizer()
    return summaryBot.askGPT(text)

