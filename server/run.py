from flask import Flask
from app.summarize import summarize
from app.parse import parse

app = Flask(__name__)

@app.route("/")
def hello():
  summarize()
  parse()
  return "Hello World"

if __name__ == "__main__":
  app.run()