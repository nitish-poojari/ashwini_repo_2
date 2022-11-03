CREATE DATABASE product_db;
USE product_db;

CREATE TABLE categories(
   id INTEGER PRIMARY KEY,
   title VARCHAR(30),
   description VARCHAR(30)
);

CREATE TABLE products(
   id INTEGER PRIMARY KEY,
   title VARCHAR(30),
   price INTEGER,
   description VARCHAR(30),
   category INTEGER,
   company VARCHAR(20)
   FOREIGN KEY(category)REFERENCES categories(id)
);

CREATE TABLE orders(
   id INTEGER PRIMARY KEY,
   total INTEGER,
   date DATE
);

CREATE TABLE order_details(
   id INTEGER PRIMARY KEY,
   orderId INTEGER,
   productId INTEGER,
   quantity INTEGER,
   price INTEGER,
   totalPrice INTEGER,
   discount INTEGER,
   FOREIGN KEY(orderId)REFERENCES orders(id),
   FOREIGN KEY(productId)REFERENCES products(id)
);

INSERT INTO categories VALUES( 1, 'abc','efg'),( 2,'hij','klm');
INSERT INTO products VALUES( 1, 'nop',20,'qrs',1,'emtec'),( 2,'tuv',30,'wxy',2,'tcs');
INSERT INTO orders VALUES( 1, 2, '2022-08-24'),( 2,3,'2022-08-25');
INSERT INTO order_details VALUES( 1, 2, 2, 30, 4, 30*4-20, 20),( 2,1, 1,20,5,20*5-10,10);

SELECT * FROM categories;
SELECT * FROM products;
SELECT * FROM orders;
SELECT * FROM order_details;