# Bearcat Circle

A study social network for University of Cincinnati community.

#Prerequisites
If you are on windows make sure you have your git config setup properly **otherwise it will not work**
(Do this before pulling the project)

1. Go into "C:\ProgramData\Git" and open the config file with something like notepad++, make sure to open as administrator so you can save
2. Change ```autocrlf=false``` and save the file
3. Open terminal and type: ```git config core.autocrlf```
4. If you get false then you are ready to pull the project

## Setup
- Make sure to have python >=3.5 and Docker with latest version
- Run `docker-compose build` to build the image
- Run `docker-compose up` to start the contaners for both chat service and database