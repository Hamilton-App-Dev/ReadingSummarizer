import openai
class Summarizer:
    
    
    @classmethod
    def askGPT(self,text):
        global response
        openai.api_key = "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"
        response = openai.Completion.create(
            # text-ada-001 -> cheaper but faster
            # text-davinci-003 -> Better quality more expensive
            engine = "text-davinci-003",
            prompt = 'Summarize this text in 3 bullets {}'.format(text),
            temperature = 0.6,
            max_tokens = 150,
            )
        return print(response.choices[0].text)
    
    def main1():
        print('Here is your summary')
        reading = "In 1961, Fidel Castro said: \"Cuba will count as having the most beautiful academy of arts in the world.\" The Cuban National Schools of Arts, originally imagined by Castro and Che Guevara, are perhaps the largest architectural achievements of the Cuban Revolution. The innovative design of the schools, which aimed to bring cultural literacy to the nation, encapsulated the radical, utopian vision of the Revolution. Unfortunately, the nation’s idealistic enthusiasm lasted for a fleeting moment in time and the Schools quickly fell out of favor; they were left to decay before even being completed. Today, following nearly four decades of neglect, the architects have returned to try and bring these derelict schools back to their intended glory. The National Schools of Art were built on the grounds of a famed country club in Havana, thus transforming an emblem of wealth and capital into a tuition-free, educationalinstitute."
        Summarizer.askGPT(reading)
        print('\n')
                
    

obj = Summarizer()
Summarizer.main1()