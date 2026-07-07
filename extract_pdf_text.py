import os
from pypdf import PdfReader
pdf_path = r"c:\Users\praveen R\Desktop\AWT\exp7.pdf"
print('exists', os.path.exists(pdf_path))
reader = PdfReader(pdf_path)
print('pages', len(reader.pages))
text = '\n'.join(page.extract_text() or '' for page in reader.pages)
print(text[:20000])
