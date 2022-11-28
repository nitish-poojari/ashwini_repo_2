create database blog_db;
use blog_db;
create table blogs(id integer primary key auto_increment,
title varchar(100),
descr varchar(500),
status int default 0,
categoryId integer,
userId integer
);
create table users(
    id integer primary key auto_increment,
    Username varchar(100),
    email varchar(20),
    Upassword varchar(100)
);
create table categories(
    id integer primary key auto_increment,
    title varchar(100)
);
