DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
        id INT AUTO_INCREMENT,
        division VARCHAR(30),
        PRIMARY KEY (id)
);

CREATE TABLE roles (
        id INT AUTO_INCREMENT,
        title VARCHAR(30),
        salary DECIMAL,
        department_id INT,
        FOREIGN KEY (department_id) 
        REFERENCES department(id) 
        ON DELETE SET NULL,
        PRIMARY KEY (id)
);

CREATE TABLE employee (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT,
        manager_id BOOLEAN DEFAULT FALSE,
        FOREIGN KEY (role_id) 
        REFERENCES roles(id) 
        ON DELETE SET NULL
    ); 