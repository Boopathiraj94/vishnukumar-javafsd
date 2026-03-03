create database Amazon_db;
use Amazon_db;
create table products(
product_id int auto_increment primary key,
product_name varchar(200) not null,
price double not null,
stock int default 0,
descriptions text,
is_deleted tinyint default 0,
is_active tinyint default 1,
created_at timestamp default current_timestamp()
);

insert	into products_details (product_name,price) values('Medimix',20),('Cintal',10),('haman',4),('lifeboy',67);

select * from products_details;

 desc products;
RENAME TABLE products TO products_details;

select *, date_format(created_at , '%d-%m-%Y') as 'created_date' from products_details;

select * from products_details where price <=10;

select * from products_details where is_deleted = 0 or price <=10;

select * from products_details where not price =4;

select * from products_details where product_name like "%</br>%";

-- inner join
create table categories (
category_id int auto_increment ,
category_name varchar(100) not null,
created_at timestamp default current_timestamp(),
primary key(category_id)
);
insert into categories(category_name) values('Soap'),('Malikai porul'),('kaikarikal');

select * from categories;
select * from products_details;
alter table products_details add category_id int;

update products_details set category_id= 3 where product_id in(5);

-- join

select pd.product_id,pd.product_name,pd.price,pd.stock,
 c.category_id,c.category_name
 from products_details as pd
 inner join categories as c 
 on c.category_id = pd.category_id
 
 


