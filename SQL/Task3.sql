CREATE DATABASE sales_db;
USE sales_db;

CREATE TABLE salespeople(snum INT, sname VARCHAR(10), city VARCHAR(10), comm DECIMAL(3,2));

CREATE TABLE customers(cnum INT, cname VARCHAR(10), city VARCHAR(10), rating INT, snum INT);

CREATE TABLE orders(onum INT, amt DECIMAL(7,2), odate DATE, cnum INT, snum INT);

INSERT INTO salespeople VALUES(1001, 'Peel', 'London', 0.12);
INSERT INTO salespeople VALUES(1002, 'Serres', 'San Jose', 0.13);
INSERT INTO salespeople VALUES(1004, 'Motika', 'London', 0.11);
INSERT INTO salespeople VALUES(1007, 'Rifkin', 'Barcelona', 0.15);
INSERT INTO salespeople VALUES(1003, 'Axelrod', 'New York', 0.10);

INSERT INTO customers VALUES(2001, 'Hoffman', 'London', 100, 1001);
INSERT INTO customers VALUES(2002, 'Giovanni', 'Rome', 200, 1003);
INSERT INTO customers VALUES(2003, 'Liu', 'San Jose', 200, 1002);
INSERT INTO customers VALUES(2004, 'Grass', 'Berlin', 300, 1002);
INSERT INTO customers VALUES(2006, 'Clemens', 'London', 100, 1001);
INSERT INTO customers VALUES(2008, 'Cisneros', 'San Jose', 300, 1007);
INSERT INTO customers VALUES(2007, 'Pereira', 'Rome', 100, 1004);

INSERT INTO orders VALUES(3001,18.69,'1990-10-03', 2008, 1007);
INSERT INTO orders VALUES(3003,767.19,'1990-10-03', 2001, 1001);
INSERT INTO orders VALUES(3002,1900.10,'1990-10-03', 2007, 1004);
INSERT INTO orders VALUES(3005,5160.45,'1990-10-03', 2003, 1002);
INSERT INTO orders VALUES(3006,1098.16,'1990-10-03', 2008, 1007);
INSERT INTO orders VALUES(3009,1713.23,'1990-10-04',2002, 1003);
INSERT INTO orders VALUES(3007,75.75,'1990-10-04',2004, 1002);
INSERT INTO orders VALUES(3008,4723.00,'1990-10-04',2006, 1001);
INSERT INTO orders VALUES(3010,309.95,'1990-10-04',2004, 1002);
INSERT INTO orders VALUES(3011,9891.88,'1990-10-04',2006, 1001);

SELECT * FROM salespeople;
SELECT * FROM customers;
SELECT * FROM orders;

-- 1)Write a query that produces all rows from the Customers table for which the salesperson’s number
-- is 1001
SELECT * FROM customers WHERE snum=1001;

-- 2)Write a select command that produces the rating followed by the name of each customer in San
-- Jose
SELECT rating,cname FROM customers WHERE city='San Jose';

-- 3)Write a query that will produce the snum values of all salespeople from the Orders table (with the
-- duplicate values suppressed)
SELECT  DISTINCT snum FROM orders;

-- 4)Write a query that will give you all orders for more than Rs. 1,000
SELECT * FROM orders WHERE amt>1000;

-- 5)Write a query that will give you the names and cities of all salespeople in London with a
-- commission above 0.10
SELECT sname,city FROM salespeople WHERE city='London' AND comm>0.10;

-- 6)Write a query on the Customers table whose output will exclude all customers with a rating <=
-- 100, unless they are located in Rom
SELECT * FROM customers WHERE rating>100 OR city='Rome';

-- 7)What will be the output from the following query?
SELECT * FROM Orders
WHERE (amt < 1000 OR
NOT (odate = '1990-10-03'
AND cnum > 2003));

-- 8)What will be the output from the following query?
SELECT * FROM Orders
WHERE NOT ((odate = '1990-10-03' OR snum >1006) AND amt >= 1500);

-- 9)Write a query that selects all orders except those with zeroes or NULLs in the amt field.
SELECT * FROM orders WHERE NOT amt=0 OR amt=NULL;