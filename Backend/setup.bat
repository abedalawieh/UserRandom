@echo off
echo Setting up your application...

REM Install Node.js dependencies
npm install
npm install mysql -g
net start mysql

mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS userrandomNew;"
mysql -u root -p userrandomNew < userrandom.sql


echo Setup complete!
