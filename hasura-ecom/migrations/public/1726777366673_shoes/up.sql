CREATE TABLE IF NOT EXISTS shoes (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    gender VARCHAR(50),
    size VARCHAR(10),
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255)
);