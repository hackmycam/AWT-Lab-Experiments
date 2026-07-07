@echo off
echo ===================================
echo Starting Library API Server...
echo ===================================

if not exist "node_modules\" (
    echo Installing dependencies for the first time...
    call npm install
)

echo.
echo Server is starting. Your browser will open to the API endpoint automatically.
echo Keep this window open to keep the server running.
echo.

start http://localhost:3000/books
node server.js
