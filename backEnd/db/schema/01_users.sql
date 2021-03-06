-- Drop and Recreate Users table
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  longitude VARCHAR(255),
  latitude VARCHAR(255)
);
