DROP DATABASE alsoviewed_db;
DROP TABLE product;

CREATE DATABASE alsoviewed_db;
\c alsoviewed_db;

CREATE TABLE product(
productid SERIAL NOT NULL,
name VARCHAR(255),
description VARCHAR(255),
price NUMERIC,
img text
);