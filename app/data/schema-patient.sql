USE dsteam30;

CREATE TABLE Person (
    person_id INT(11) AUTO_INCREMENT,
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    gender CHAR(1) DEFAULT ' ',
    street_address VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(64),
    zipcode INT(11),
    phone VARCHAR(64),
    email VARCHAR(64),
    radio_number INT(11),
    station_num INT(11),
    position_name VARCHAR(64),
    certification_id INT(11),
    isactive VARCHAR(5),
    PRIMARY KEY (person_id),
    FOREIGN KEY (certification_id) REFERENCES Certifications(certification_id)
);

CREATE TABLE Certifications (
    certification_id INT(11),
    certification_name VARCHAR(64),
    default_expiration_period INT(11),
    PRIMARY KEY (certification_id)
  );

CREATE TABLE Person_Certifications (
  person_id INT(11),
  certification_id INT(11),
  earned_date DATE,
  expiration_date DATE,
  FOREIGN KEY (person_id) REFERENCES Person(person_id),
  FOREIGN KEY (certification_id) REFERENCES Certifications(certification_id)
);
