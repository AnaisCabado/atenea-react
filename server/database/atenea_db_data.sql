USE atenea_db;

INSERT INTO `user` (first_name, last_name, username, email, password) VALUES
('Ana', 'Ramírez', 'artsyAna', 'ana.ramirez2@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Pablo', 'Gómez', 'painterPablo', 'pablo.gomez@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Juan', 'Morales', 'collabJuan', 'juan.morales@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Sofía', 'López', 'sketchSofi', 'sofia.lopez@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Elena', 'Castro', 'expoElena', 'elena.castro@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Marcos', 'Fernández', 'muralsMark', 'marcos.fernandez@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Lucía', 'Torres', 'artTeacher', 'lucia.torres@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('José', 'Martínez', 'drawKid', 'jose.martinez@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Gabriela', 'Ríos', 'galeriaGaby', 'gabriela.rios@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK'),
('Miguel', 'Navarro', 'tattooMike', 'miguel.navarro@example.com', '$2b$10$3hlItH6DsK5FMGuhhgsGj.IivU6zHhKREr5o3X4V72qnHoq44NLBK');


INSERT INTO `publication` (created_at, title, text, category, user_id) VALUES
(NOW(), 'Evento 1', 'Primer evento importante', 'event', 1),
(NOW(), 'Post 1', 'Descripción del post uno', 'post', 2),
(NOW(), 'Evento 2', 'Segundo evento genial', 'event', 3),
(NOW(), 'Post 2', 'Contenido interesante', 'post', 4),
(NOW(), 'Evento 3', 'Otro evento más', 'event', 5),
(NOW(), 'Post 3', 'Un post más', 'post', 6),
(NOW(), 'Evento 4', 'Evento destacado', 'event', 7),
(NOW(), 'Post 4', 'Contenido visual impactante', 'post', 8),
(NOW(), 'Evento 5', 'Evento especial', 'event', 9),
(NOW(), 'Post 5', 'Otro post con imagen', 'post', 10);

INSERT INTO `event` (date_time, saved, publication_id) VALUES
('2025-05-01 10:00:00', b'1', 1),
('2025-05-02 11:00:00', b'0', 3),
('2025-05-03 12:00:00', b'1', 5),
('2025-05-04 13:00:00', b'0', 7),
('2025-05-05 14:00:00', b'1', 9),
('2025-05-06 15:00:00', b'0', 2),
('2025-05-07 16:00:00', b'1', 4),
('2025-05-08 17:00:00', b'0', 6),
('2025-05-09 18:00:00', b'1', 8),
('2025-05-10 19:00:00', b'0', 10);

INSERT INTO `post` (image, saved, publication_post_id) VALUES
('img1.jpg', b'1', 1),
('img2.jpg', b'0', 2),
('img3.jpg', b'1', 3),
('img4.jpg', b'0', 4),
('img5.jpg', b'1', 5),
('img6.jpg', b'0', 6),
('img7.jpg', b'1', 7),
('img8.jpg', b'0', 8),
('img9.jpg', b'1', 9),
('img10.jpg', b'0', 10);

SELECT * FROM user;