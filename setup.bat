@echo off
title Discord Weather Rich Presence Status Setup
:top
cls
node setup.js
pause
    call npm init
    call npm i discord-rpc node-fetch nodemon chalk 
pause
exit
goto :top
