from langchain import PromptTemplate
from langchain.llms import OpenAI


llm = OpenAI(model_name="text-davinci-003", n=2, best_of=2, openai_api_key='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')
reading = "In 1961, Fidel Castro said: \"Cuba will count as having the most beautiful academy of arts in the world.\" The Cuban National Schools of Arts, originally imagined by Castro and Che Guevara, are perhaps the largest architectural achievements of the Cuban Revolution. The innovative design of the schools, which aimed to bring cultural literacy to the nation, encapsulated the radical, utopian vision of the Revolution. Unfortunately, the nation’s idealistic enthusiasm lasted for a fleeting moment in time and the Schools quickly fell out of favor; they were left to decay before even being completed. Today, following nearly four decades of neglect, the architects have returned to try and bring these derelict schools back to their intended glory. The National Schools of Art were built on the grounds of a famed country club in Havana, thus transforming an emblem of wealth and capital into a tuition-free, educationalinstitute."
print(llm("Summarize this text into 3 bullets: {}".format(reading)))

# one_input_prompt = PromptTemplate(input_variables=["reading"], template="Summarize this text into 3 bullets: {reading}")
# print(one_input_prompt.format(reading="In 1961, Fidel Castro said: \"Cuba will count as having the most beautiful academy of arts in the world.\" The Cuban National Schools of Arts, originally imagined by Castro and Che Guevara, are perhaps the largest architectural achievements of the Cuban Revolution. The innovative design of the schools, which aimed to bring cultural literacy to the nation, encapsulated the radical, utopian vision of the Revolution. Unfortunately, the nation’s idealistic enthusiasm lasted for a fleeting moment in time and the Schools quickly fell out of favor; they were left to decay before even being completed. Today, following nearly four decades of neglect, the architects have returned to try and bring these derelict schools back to their intended glory. The National Schools of Art were built on the grounds of a famed country club in Havana, thus transforming an emblem of wealth and capital into a tuition-free, educationalinstitute."))

# # An example prompt with one input variable
# one_input_prompt = PromptTemplate(input_variables=["adjective"], template="Tell me a {adjective} joke.")
# print(one_input_prompt.format(adjective="funny"))
# -> "Tell me a funny joke."