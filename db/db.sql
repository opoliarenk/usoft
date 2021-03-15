create database usoftBackend;
create user 'root'@'localhost' identified by 'securepass';
GRANT ALL PRIVILEGES ON usoftBackend.* to 'root'@'localhost';
FLUSH PRIVILEGES;
