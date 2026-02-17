@echo off
cd /d "C:\Users\hi\Documents\Practice-main"
git add .
git commit -m "Manual backup on %date%%time%"
git push origin main
exit