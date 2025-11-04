#!/bin/bash
cd ~/Documents/Practice
git add .
git commit -m "Auto backup: $(date)"
git push origin main
