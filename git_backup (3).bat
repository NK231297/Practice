@echo off
title Git Backup - Pushing to GitHub
color 0A

:: ============================================================
::   EDIT THIS LINE - Paste your exact project folder path
::   To find it: Open your project folder in File Explorer
::               then click the address bar and copy the path
:: ============================================================
set PROJECT_PATH=C:\Users\hi\Documents\Practice-main

:: ============================================================
::   Your GitHub repository link (already set - do not change)
:: ============================================================
set GITHUB_URL=https://github.com/NK231297/Practice.git

:: Go to your project folder
cd /d "%PROJECT_PATH%"

:: Check if this is a git repo, if not set it up automatically
if not exist ".git" (
    echo.
    echo  No Git repository found. Setting it up now...
    echo.
    git init
    git remote add origin %GITHUB_URL%
    echo  Git setup done!
    echo.
)

:: Make sure remote origin is correctly set
for /f "tokens=*" %%i in ('git remote get-url origin 2^>nul') do set CURRENT_REMOTE=%%i
if "%CURRENT_REMOTE%"=="" (
    echo  Adding GitHub remote...
    git remote add origin %GITHUB_URL%
) else if not "%CURRENT_REMOTE%"=="%GITHUB_URL%" (
    echo  Updating GitHub remote URL...
    git remote set-url origin %GITHUB_URL%
)

echo.
echo  ============================================
echo   Git Backup - Saving your changes to GitHub
echo  ============================================
echo.

:: Show what files were changed
echo  Files changed:
echo  --------------
git status --short
echo.

:: Check if there are new local changes to commit
git status --porcelain | findstr /r "." >nul 2>&1
if errorlevel 1 (
    echo  No new changes to commit.
    echo  Checking if any previous commits still need to be pushed...
    echo.
) else (
    :: Add all changed files
    echo  Adding all changes...
    git add .

    :: Create a commit message with current date and time
    for /f "tokens=2-4 delims=/ " %%a in ("%date%") do set TODAY=%%c-%%a-%%b
    for /f "tokens=1-2 delims=: " %%a in ("%time%") do set NOW=%%a:%%b
    set NOW=%NOW: =%
    set COMMIT_MSG=Backup: %TODAY% at %NOW%

    :: Commit
    echo  Committing with message: "%COMMIT_MSG%"
    git commit -m "%COMMIT_MSG%"
    echo.
)

:: Always pull first to stay in sync with GitHub
echo  Syncing with GitHub...
git pull origin main --rebase

if errorlevel 1 (
    echo.
    echo  ERROR: Could not sync with GitHub.
    echo  There may be a conflict in your files.
    echo  Please open Git Bash and run: git status
    echo.
    pause
    exit /b
)

:: Always push - this sends any unpushed commits to GitHub
echo.
echo  Pushing to GitHub...
git push -u origin main

:: Done!
echo.
if errorlevel 1 (
    echo  Something went wrong while pushing.
    echo  Check your internet connection or GitHub credentials.
) else (
    echo  ============================================
    echo   SUCCESS! Your code is backed up on GitHub!
    echo  ============================================
)

echo.
pause
