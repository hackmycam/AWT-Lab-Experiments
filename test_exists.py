import os
p = 'C:\\Program Files\\MongoDB\\Server\\7.0' + chr(8) + 'in\\mongod.exe'
print(f"Path: {repr(p)}")
print(f"Exists? {os.path.exists(p)}")
