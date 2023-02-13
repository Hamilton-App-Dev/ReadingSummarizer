import app.chunkText as chunkText
import app.summarize as summarize
# Will summarize a .txt file and print output

fileName = 'artAndCraftOfMachine.txt' #Change to name of file
text = ''
with open(fileName, 'r') as file:
	text = file.read().replace('/n', '')

# Break text into chunks
chunks = chunkText.getChunks(text)
# Summarize each chunk
for chunk in chunks:
    print(summarize.summarizeReading(chunk))