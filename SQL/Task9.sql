USE sales_db;

-- 1)Create an index that will enable a user to pull orders for ‘1990-10-03’ out of the Orders table quickly.
CREATE INDEX  o_order ON orders(odate) WHERE odate ='1990-10-03'

-- 2)If the Orders table has already been created, how can you force the onum field to be unique
(assume all current values are unique)?
ALTER TABLE orders ADD CONSTRAINT unique_onum UNIQUE(onum)

-- 3)Create an index that would permit salesperson to retrieve his orders.
CREATE INDEX s_orders ON orders(snum)

-- 4)Let us assume that each salesperson is to have only one customer of a given rating, and that this is
currently the case. Create an index that enforces it.
CREATE INDEX c_rating ON customers(snum,cnum,rating);

-- 5)Create an index to speed up searching order on a given date by given customer
CREATE INDEX o_order ON orders(date,cnum);