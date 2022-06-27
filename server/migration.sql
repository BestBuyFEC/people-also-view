DROP TABLE product;

CREATE TABLE product(
productid SERIAL NOT NULL,
name VARCHAR(255),
description VARCHAR(255),
price NUMERIC,
img text
);