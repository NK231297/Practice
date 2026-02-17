@echo off
title Git Backup - Pushing to GitHub
color 0A

:: ============================================================
::   EDIT THIS LINE - Set your project folder path
::   Example: C:\Users\JohnDoe\Documents\MyProject
:: ============================================================
set PROJECT_PATH=C:\Users\hi\Documents\main

:: ============================================================
::   Go to your project folder
:: ============================================================
cd C:\Users\hi\Documents\main

:: Check if this is actually a git repo
if not exist ".git" (
    echo.
    echo  ERROR: No Git repository found in:
    echo  %PROJECT_PATH%
    echo.
    echo  Make sure PROJECT_PATH is set to your project folder.
    pause
    exit /b
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

:: Check if there is anything to commit
git diff --quiet HEAD 2>nul
git status --porcelain | findstr /r "." >nul 2>&1
if errorlevel 1 (
    echo  No changes found. Everything is already up to date!
    echo.
    pause
    exit /b
)

:: Add all changed files
echo  Adding all changes...
git add .

:: Create a commit message with current date and time
for /f "tokens=1-3 delims=/ " %%a in ("%date%") do set TODAY=%%c-%%b-%%a
for /f "tokens=1-2 delims=: " %%a in ("%time%") do set NOW=%%a:%%b
set COMMIT_MSG=Backup: %TODAY% at %NOW%

:: Commit
echo  Committing with message: "%COMMIT_MSG%"
git commit -m "%COMMIT_MSG%"

:: Push to GitHub
echo.
echo  Pushing to GitHub...
git push

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
