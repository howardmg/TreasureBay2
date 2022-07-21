DROP DATABASE IF EXISTS treasure_bay;

CREATE DATABASE treasure_bay;
\c adventure_wise

DROP TABLE IF EXISTS user CASCADE;
DROP TABLE IF EXISTS product CASCADE;
DROP TABLE IF EXISTS message CASCADE;


CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    city TEXT NOT NULL,
    state VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(16) NOT NULL
);

CREATE TABLE product(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    price NUMERIC NOT NULL,
    description TEXT NOT NULL,
    details TEXT,
    picture TEXT,
    user_id INT REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE message(
    message_id SERIAL PRIMARY KEY,
    conversation_id INT
    message text,
    time TIMESTAMP,
    sender_id INT REFERENCES user(user_id) ON DELETE CASCADE,
    receiver_id INT REFERENCES user(user_id) ON DELETE CASCADE
);

\i seed.sql