CREATE TABLE localhappyhour(
<<<<<<< HEAD
id INT(11) NOT NULL AUTO_INCREMENT,
=======
id INT (11) NOT NULL AUTO_INCREMENT,
>>>>>>> 6b37ab82fad8ed3cbdf895a35a9aab2e09d3e9ec
ZIPCODE CHAR(6),
restaurant VARCHAR(100) NOT NULL,
drink VARCHAR(100),
food VARCHAR(100),
price Decimal(10,2),
hour time(6),
PRIMARY KEY (id)
);
SELECT * FROM localhappyhour;