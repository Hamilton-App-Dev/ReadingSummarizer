import openai
openai.api_key = "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"

# list engines
engines = openai.Engine.list()

# print the first engine's id
print(engines.data[0].id)

# create a completion
completion = openai.Completion.create(engine="davinci", prompt="what is 2 + 2?")

# print the completion
print(completion.choices[0].text)