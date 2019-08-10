INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUES('restaurant','Buffalo Wild Wings', 92553, 'Bud Light', 2.00, 'Coors Light', 2.00, 'Loaded Nachos', 3.00, 'Chicken Fingers', 3.00, 030000, 050000, 'Monday', 'Friday',33.9394258,-117.2765);

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUES('restaurant', 'Applebees', 92553, 'Mai Tai', 1.00, default,default, 'appetizers', default, default, default, 090000, 120000, 'Monday', 'Saturday', 33.9366, -117.2784);

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUES('restaurant', "Bj's Restuarant & Brewhouse", 92553, 'Domestic Bottles', 3.00, 'Dark Horse Wines', 5.00, 'Chips & Dip', 3.00, 'Brewhouse Burger', 6.00, 100000, 113000, 'Sunday', 'Thursday', 33.9395, -117.2624);

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUES('restaurant', "Chili's", 92553, 'Small Domestic Draft', 3.00, 'Classic Margarita', 4.00, 'Chips & Salsa', 3.00, 'Half Margherita Flatbread', 4.00, 030000, 070000, 'Monday', 'Thursday', 36.719201, -95.935708); 

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUES('restaurant', 'Cafe Rio', 92553, 'House Margaritas', 5.00, 'Draft & Bottled Beer', 5.00, 'Crispy Tacos', 2.00, default, default, 040000, 060000, 'Monday', 'Thursday', 33.9380, -117.2765);

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUES('restaurant', 'Olive Garden', 92553, 'Beer', 4.00, 'Wine', 5.00, 'Tastes of Italy Small Plates', 5.00, default, default, 030000, 060000, 'Monday', 'Friday', 33.9279872, -117.2553728);

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng) 
VALUE('restaurant', 'Tilted Kilt', 92553, 'Domestic Drafts', 3.50, 'House Wine', 5.50, 'Appetizers', 2.00, default, default, 030000, 070000, 'Monday', 'Thursday', 33.9372, -117.2779);

INSERT INTO HappyHours(type, place_name,zip_code, drink1_name, drink1_price, drink2_name, drink2_price, appetizer1_name, appetizer1_price, appetizer2_name, appetizer2_price, hour_start, hour_stop, day_start, day_end,lat, lng)
VALUE('restaurant', "Woody's", 92553, 'Bottled Beer', 4.00, 'House Wines By The Glass', 5.00, 'Grilled chicken Skewers', 5.00, 'Popcorn Shrimp', 5.00, 030000, 060000, 'Monday', 'Sunday', 33.9175, -117.2602);  


SELECT * FROM HappyHours;

DELETE FROM HappyHours WHERE id=18;
