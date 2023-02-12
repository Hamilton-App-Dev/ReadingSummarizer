import tiktoken

'''
Max number of tokens allowed:
token counts in the prompt + completion < 4097
'''

# # For Testing
# fileName = 'archReadingText.txt'
# readingText = ''
# with open(fileName, 'r') as file:
# 	readingText = file.read().replace('/n', '')
	

'''Input:
    String of text 
Output:
    List of Strings ~2000 tokens each
'''
def getChunks(text):
	# Get list of tokens by encodings
    encoding = tiktoken.get_encoding('gpt2')
    tokens = encoding.encode(text)
    # Break encodings into chunks
    output = []
    for chunkI in range(0, len(tokens), 2000):
          decodedChunk = encoding.decode(tokens[chunkI:chunkI+2000])
          output.append(decodedChunk)
    return output

