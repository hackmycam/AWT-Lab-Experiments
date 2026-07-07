@echo off
echo ===================================
echo Running MongoDB CRUD Operations...
echo ===================================

echo Starting MongoDB Database...
python ..\run_db.py

if not exist "node_modules\" (
    echo Installing dependencies for the first time...
    call npm install
)

echo.
echo Executing CRUD Operations...
echo -----------------------------------
node app.js
echo -----------------------------------
echo.
echo Operations completed successfully!
pause
