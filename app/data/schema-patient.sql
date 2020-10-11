USE dsteam30;

CREATE TABLE Station (
    station_number INTEGER PRIMARY KEY,
    station_name VARCHAR(64),
    street_address VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    zipcode INTEGER,
    contact_email VARCHAR(200),
    contact_number VARCHAR(64)
);

INSERT INTO Station (station_number, station_name, street_address, city, state, zipcode, contact_email, contact_number) VALUES
(1, "Btown", "12345 Long St", "Bloomington",  "IN", 47401, "abc@example.com", "812-555-5555");

CREATE TABLE Person (
    person_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    station_number INTEGER REFERENCES Station(station_number),
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    position_name VARCHAR(64),
    gender CHAR(1) DEFAULT ' ',
    street_address VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    zipcode INTEGER,
    work_phone VARCHAR(64),
    mobile_phone VARCHAR(64),
    radio_number INTEGER,
    isActive BIT
);

CREATE TABLE Certifications (
    certification_id INTEGER PRIMARY KEY,
    person_id INTEGER REFERENCES Person(person_id),
    certification_name VARCHAR(64),
    renewed_date DATE,
    default_expiration_date DATE
  );
