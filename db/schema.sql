DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABLE employee (
     id INT,
     first_name VARCHAR(30),
     last_name VARCHAR(30),
     manager_id INT,
     PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT,
    title VARCHAR(30),
    salary DECIMAL (5, 2),
    employee_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id),
    REFERENCES employee(id)
    ON DELETE SET NULL
);

