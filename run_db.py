import os
import subprocess
import time

found_path = r"C:\Program Files\MongoDB\Server\8.3\bin\mongod.exe"

print(f"Using mongod.exe path: {repr(found_path)}")
print(f"Exists? {os.path.exists(found_path)}")

db_path = r"c:\Users\praveen R\Desktop\AWT\mongodb_data"
os.makedirs(db_path, exist_ok=True)

log_path = r"c:\Users\praveen R\Desktop\AWT\mongodb_log.txt"
print(f"Starting mongod with dbpath: {db_path}...")
try:
    with open(log_path, 'w') as f:
        proc = subprocess.Popen([found_path, '--dbpath', db_path], stdout=f, stderr=subprocess.STDOUT)
        print(f"Started process with PID: {proc.pid}")
        time.sleep(3)
        poll = proc.poll()
        if poll is None:
            print("mongod is successfully running in the background.")
        else:
            print(f"mongod exited with code: {poll}")
    
    if poll is not None:
        with open(log_path, 'r') as log_file:
            print("Logs:")
            print(log_file.read())
except Exception as e:
    print(f"Error starting: {e}")
