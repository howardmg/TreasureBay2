-- DROP DATABASE IF EXISTS treasure_bay;

-- CREATE DATABASE treasure_bay;
-- \c treasure_bay

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS messages CASCADE;


CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    zipcode INT,
    city TEXT NOT NULL,
    state VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    --uuid TEXT,
    password TEXT NOT NULL,
    avatar TEXT
);

CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name text,
    price MONEY NOT NULL,
    description TEXT NOT NULL,
    details TEXT,
    image_url VARCHAR[],
    user_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE messages(
    message_id SERIAL PRIMARY KEY,
    conversation_id INT,
    message text,
    time TIMESTAMP DEFAULT current_timestamp,
    sender_id INT REFERENCES users(user_id) ON DELETE CASCADE,
    receiver_id INT REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE images(
    image_id SERIAL PRIMARY KEY,
    image_url TEXT
)

\i db/seed.sql
