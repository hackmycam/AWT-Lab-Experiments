@echo off
echo ===================================
echo Starting React Application (Part A)...
echo ===================================

cd PartA-Employee-Details

if not exist "node_modules\" (
    echo Installing dependencies for the first time...
    call npm install
)

echo.
echo Server is starting. Your browser will open automatically.
echo Keep this window open to keep the server running.
echo.

start http://localhost:5173
npm run dev
