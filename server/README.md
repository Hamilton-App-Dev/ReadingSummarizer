## Getting started:

1. Clone repo

```
git clone https://github.com/Hamilton-App-Dev/ReadingSummarizer.git
```

2. Create a virtual environment, ideally not inside the project repo

```
python3 -m venv venv
```

3. Activate virtual envrionment

##### Mac:

```
source venv/bin/activate
```

##### Windows:

```
venv/bin/activate.bat
```

4. Install dependencies

```
pip install -r requirements.txt
```

5. Use environment variables

```
export OPENAI_API_KEY=""
```

6. Start dev server

```
python3 run.py
```

## Working

1. Make new feature branch

```
git checkout -b new-feature
```

2. Add and commit changes

```
git add .
```

Try to have somewhat descriptive commit messages!

```
git commit -m "feat: added new package to requirements.txt and finished feature-a"
```

3. Push as many times as needed.

```
git push origin new-feature
```

4. Push when done with feature and create pull request in GitHub

5. **Always review pull requests!**

6. Merge main with the finished feature branch

```
git checkout main
git pull
git pull origin marys-feature
git push
```

## Adding dependencies

```
pip freeze > requirements.txt
```

## Deployment

Use heroku? Let's not use docker.
