import os

OUTPUT_FILE = "All_Programs_Code.txt"
PROJECTS = [
    "Program-1-Department-Page",
    "Program-2-Form-Validation",
    "Program-3-React-Employee-Events-Lifecycle",
    "Program-4-React-Order-Details",
    "Program-5-React-Registration-Form",
    "Program-6-Library-REST-API",
    "Program-7-MongoDB-CRUD"
]

EXTENSIONS_TO_INCLUDE = ['.html', '.css', '.js', '.jsx']

with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
    outfile.write("="*50 + "\n")
    outfile.write("AWT LAB PROGRAMS - COMPLETE SOURCE CODE\n")
    outfile.write("="*50 + "\n\n")

    for project in PROJECTS:
        outfile.write("\n" + "#"*50 + "\n")
        outfile.write(f"PROJECT: {project}\n")
        outfile.write("#"*50 + "\n\n")
        
        for root, dirs, files in os.walk(project):
            # Skip node_modules and .git
            if 'node_modules' in root or '.git' in root or 'dist' in root:
                continue
                
            for file in files:
                if any(file.endswith(ext) for ext in EXTENSIONS_TO_INCLUDE):
                    filepath = os.path.join(root, file)
                    outfile.write(f"--- FILE: {filepath} ---\n")
                    try:
                        with open(filepath, 'r', encoding='utf-8') as infile:
                            outfile.write(infile.read())
                    except Exception as e:
                        outfile.write(f"[Error reading file: {e}]")
                    outfile.write("\n\n")

print(f"Code compiled successfully into {OUTPUT_FILE}")
