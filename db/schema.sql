CREATE TABLE localhappyhour(
id INT (11) NOT NULL AUTO_INCREMENT,
ZIPCODE CHAR(6),
restaurant VARCHAR(100) NOT NULL,
drink VARCHAR(100),
food VARCHAR(100),
price Decimal(10,2),
hour time(6),
PRIMARY KEY (id)
);
SELECT * FROM localhappyhour;
DROP DATABASE IF EXISTS drink_properly_db;

CREATE DATABASE drink_properly_db;

USE drink_properly_db;