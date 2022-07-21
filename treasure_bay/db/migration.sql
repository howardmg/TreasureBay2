-- DROP DATABASE IF EXISTS adventure_wise;

-- CREATE DATABASE adventure_wise;
-- \c adventure_wise

DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS message CASCADE;


-- CREATE TABLE users(
--     user_id SERIAL PRIMARY KEY,
--     first_name VARCHAR(100) NOT NULL,
--     last_name VARCHAR(150) NOT NULL,
--     email VARCHAR(150) NOT NULL,
--     password TEXT NOT NULL
-- );

-- CREATE TABLE trip(
--     trip_id SERIAL PRIMARY KEY,
--     trip_name TEXT,
--     user_id INT REFERENCES users(user_id) ON DELETE CASCADE
-- );

-- CREATE TABLE place(
--     place_id SERIAL PRIMARY KEY,
--     place_name VARCHAR(255),
--     place_address VARCHAR(255),
--     trip_date DATE,
--     trip_time TIMESTAMP,
--     notes TEXT,
--     trip_id INT REFERENCES trip(trip_id) ON DELETE CASCADE
-- );

-- CREATE TABLE popular_places(
--     id SERIAL PRIMARY KEY,
--     city TEXT,
--     state_country TEXT,
--     picture TEXT
-- );

-- \i seed.sql