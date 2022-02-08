CREATE DATABASE animal_crossing;

CREATE TABLE fossils (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description VARCHAR(255),
    weight INTEGER
);