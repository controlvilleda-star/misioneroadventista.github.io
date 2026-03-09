import io
import re

with open('index.html', 'rb') as f:
    text = f.read().decode('utf-16', errors='ignore')

# The file got completely destroyed by prepending íf to every character due to bad encoding assumptions
# We need to rebuild it by stripping out the garbage
text = text.replace('í', '')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(text)
