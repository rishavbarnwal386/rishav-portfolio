@echo off
setlocal
cd /d "%~dp0"

title Rishav Kumar - QA Portfolio
color 0B

echo.
echo ================================================
echo       RISHAV KUMAR - QA PORTFOLIO
echo              LOCAL PREVIEW
echo ================================================
echo.

where node >nul 2>&1 || goto NO_NODE
where npm >nul 2>&1 || goto NO_NPM
if not exist package.json goto NO_PROJECT

if not exist node_modules\vite\bin\vite.js (
  echo Installing project dependencies...
  call npm.cmd install --no-audit --no-fund
  if errorlevel 1 goto INSTALL_FAILED
)

start "Rishav Portfolio - Vite" cmd /k "cd /d ""%~dp0"" && npm.cmd run dev -- --host 127.0.0.1"

echo Waiting for Vite...
timeout /t 4 /nobreak >nul

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "Start-Process 'http://127.0.0.1:5173/'"

echo.
echo Portfolio is running at http://127.0.0.1:5173/
echo Keep the Vite window open while using the portfolio.
pause
exit /b 0

:NO_NODE
echo ERROR: Node.js is not installed or not available in PATH.
pause
exit /b 1

:NO_NPM
echo ERROR: npm is not available in PATH.
pause
exit /b 1

:NO_PROJECT
echo ERROR: package.json was not found. Extract the ZIP fully first.
pause
exit /b 1

:INSTALL_FAILED
echo ERROR: npm install failed. Keep this window open and send me the error.
pause
exit /b 1
