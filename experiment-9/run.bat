@echo off
echo ===================================
echo Starting Login System...
echo ===================================

echo Starting MongoDB Database...
python ..\run_db.py

echo.
echo Starting Backend Server in a new window...
cd backend
if not exist "node_modules\" call npm install
start cmd /k "title Backend Server ^& color 0A ^& echo Backend Server Running on Port 5000... ^& node server.js"
cd ..

echo.
echo Starting Frontend React App...
cd frontend
if not exist "node_modules\" call npm install

echo.
echo React App is starting. Your browser will open automatically.
echo Keep this window open to keep the frontend running.
echo.

start http://localhost:5173
npm run dev
