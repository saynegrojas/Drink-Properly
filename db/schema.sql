DROP DATABASE IF EXISTS happy_hour_db;

CREATE DATABASE happy_hour_db;

USE happy_hour_db;

CREATE TABLE happyhours(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
type VARCHAR(100),
place_name VARCHAR(100),
zip_code DECIMAL(10,2),
drink1_name VARCHAR(100),
drink1_price DECIMAL(10,2),
drink2_name VARCHAR(100),
drink2_price Decimal(10,2),
appetizer1_name VARCHAR(100),
appetizer1_price DECIMAL(10,2),
appetizer2_name VARCHAR(100),
appetizer2_price DECIMAL(10,2),
hour_start TIME(6),
hour_stop TIME(6),
day_start VARCHAR(100),
day_end VARCHAR(100),
lat DECIMAL(10,8),
lng DECIMAL(11,8),
PRIMARY KEY (ID)
);
SELECT*FROM HAPPYHOURS;