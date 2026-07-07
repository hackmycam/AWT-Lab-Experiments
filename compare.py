import os

constructed = 'C:\\Program Files\\MongoDB\\Server\\7.0' + chr(8) + 'in\\mongod.exe'

for r, d, files in os.walk('C:\\'):
    if 'mongod.exe' in files:
        found = os.path.join(r, 'mongod.exe')
        print(f"Found: {repr(found)}")
        print(f"Const: {repr(constructed)}")
        print(f"Equal? {found == constructed}")
        print(f"Found exists: {os.path.exists(found)}")
        print(f"Const exists: {os.path.exists(constructed)}")
        # Print char by char difference
        for i, (c1, c2) in enumerate(zip(found, constructed)):
            if c1 != c2:
                print(f"Diff at {i}: {ord(c1)} ({repr(c1)}) vs {ord(c2)} ({repr(c2)})")
        break
