INSERT INTO users (first_name, last_name, city, state, zipcode, email, password, avatar) 
VALUES 
('John', 'Smith', 'Austin', 'Texas', '12345', 'jsmith@test.com', 'test123', 'https://pixabay.com/get/g64087ae177a5db5b30d4a55e74ee43347c86b0a3637c671aadbb620f5814214807effcc711ac88c8c71c543c1ab52af3_1920.jpg'),
('Steve', 'Baker', 'Austin', 'Texas', '12345', 'sbaker@test.com', 'test321', 'https://pixabay.com/get/g5711da399285486c38d711b496067624a855671ca73a12b5326b17a178dfae93ad82595828f659bfb6d1979b2712df811c532274664aee44d244ae28b5048e35_1920.jpg');


INSERT INTO products (name, price, description, details, image_url, user_id)
VALUES
('Lawn Mower', 550.00, 'Cordless Electric Lawn Mower', 'Good condition. Powered by battery, this lightweight mower runs more quietly than other mowers and require little maintenance. Interchangeable batteries work with other tools and power equipment for convenience.', ARRAY['https://i5.walmartimages.com/asr/57b0e163-c483-46e8-be3f-3f2f13f5b7d5_3.873ad2b0b45fc584ce3afe23061f905e.jpeg', 'https://i5.walmartimages.com/asr/57b0e163-c483-46e8-be3f-3f2f13f5b7d5_3.873ad2b0b45fc584ce3afe23061f905e.jpeg', 'https://i5.walmartimages.com/asr/57b0e163-c483-46e8-be3f-3f2f13f5b7d5_3.873ad2b0b45fc584ce3afe23061f905e.jpeg', 'https://i5.walmartimages.com/asr/57b0e163-c483-46e8-be3f-3f2f13f5b7d5_3.873ad2b0b45fc584ce3afe23061f905e.jpeg'], 1);

INSERT INTO messages (conversation_id, message, sender_id, receiver_id)
VALUES 
(1, 'Is the mower still available?', 2, 1),
(1, 'It sure is!', 1, 2),
(1, 'Will you take $450 for it?', 2, 1),
(1, 'The lowest I will go is $500', 1, 2),
(1, 'Ok, I will take it!', 2, 1);