INSERT INTO users (first_name, last_name, city, state, email, password) 
VALUES 
('John', 'Smith', 'Austin', 'Texas', 'jsmith@test.com', 'test123'),
('Steve', 'Baker', 'Austin', 'Texas', 'sbaker@test.com', 'test321');

INSERT INTO products (name, price, description, details, picture, user_id)
VALUES
('Lawn Mower', 550.00, 'Cordless Electric Lawn Mower', 'Good condition. Powered by battery, this lightweight mower runs more quietly than other mowers and require little maintenance. Interchangeable batteries work with other tools and power equipment for convenience.', 'https://i5.walmartimages.com/asr/57b0e163-c483-46e8-be3f-3f2f13f5b7d5_3.873ad2b0b45fc584ce3afe23061f905e.jpeg', 1);

INSERT INTO messages (conversation_id, message, sender_id, receiver_id)
VALUES 
(1, 'Is the mower still available?', 2, 1),
(1, 'It sure is!', 1, 2),
(1, 'Will you take $450 for it?', 2, 1),
(1, 'The lowest I will go is $500', 1, 2),
(1, 'Ok, I will take it!', 2, 1);