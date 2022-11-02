CREATE DATABASE student_db;
USE student_db;

CREATE TABLE school(
     id INTEGER PRIMARY KEY, 
     name VARCHAR (20),
     address VARCHAR(50),
     principal VARCHAR(20),
     phone INT
 );

CREATE TABLE student(
      id INTEGER PRIMARY KEY,
      name VARCHAR(20),
      address VARCHAR(50),
      phone INT,
      email VARCHAR(20),
      age INT,
      schoolid INT,
      FOREIGN KEY(schoolid) REFERENCES school(id)
 );

INSERT INTO school VALUES ('1','modern','nigdi','patil','11111'),('2','spm','pune','kale','2222');
INSERT INTO student VALUES ('1','ashwini','nigdi','9999','ash@efg.com','21','2'),('2','akansha','pune','8888','aka@efg.com','18','1');

SELECT * FROM school;
SELECT * FROM student;