@echo off
echo ===================================
echo Starting Person Details App...
echo ===================================

echo Starting MongoDB Database...
python ..\run_db.py

if not exist "node_modules\" (
    echo Installing dependencies for the first time...
    call npm install
)

echo.
echo Server is starting. Your browser will open automatically.
echo Keep this window open to keep the server running.
echo.

start http://localhost:3000
node server.js
