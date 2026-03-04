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

update products_details set category_id= 6 where product_id in(2,3);

-- join

select pd.product_id,pd.product_name,pd.price,pd.stock,
 c.category_id,c.category_name
 from products_details as pd
 inner join categories as c 
 on c.category_id = pd.category_id;
 
 -- left join
  
 select pd.product_id,pd.product_name,pd.price,pd.stock,
 c.category_id,c.category_name
 from products_details as pd
 left join categories as c 
 on c.category_id = pd.category_id;
 -- right join
 insert into categories(category_name) values('Powders');
 select pd.product_id,pd.product_name,pd.price,pd.stock,
 c.category_id,c.category_name
 from products_details as pd
 right join categories as c 
 on c.category_id = pd.category_id;
 
 --
 
 create table shirts(
  shirt_id int auto_increment primary key,
  shirt_name varchar(500)
 );


create table sizes(
  size_id int auto_increment primary key,
  size_name varchar(500)
 );
 
 insert into shirts(shirt_name) values('red Shirt'),('Blue T-shirt');
  insert into sizes(size_name) values('S'),('M'),('XL'),('XXL');

select sh.shirt_name , si.size_name from shirts as sh cross join 
sizes as si order by sh.shirt_name asc;
select sh.shirt_name , si.size_name from shirts as sh cross join 
sizes as si order by sh.shirt_name desc;

select sh.shirt_name , si.size_name from shirts as sh cross join 
sizes as si order by sh.shirt_name desc limit 4;

-- 
alter table products_details add min_stock int ;

alter table products_details add constraint chck_1 check (min_stock >=5)  ;

select * from products_details;

update products_details set min_stock = 6;
update products_details set min_stock = 5 where product_id = 1;

-- foregin key
select * from categories;
select * from products_details;
alter table products_details add constraint fk_category_1 foreign key(category_id)
 references categories(category_id);

update products_details set category_id = 3 where product_id = 1;
-- TCL

SET autocommit=0;
update products_details set price = 30 where product_id = 1;
ROLLBACK;
-- AGGREGATE FUNCTION

SELECT count(product_id) as 'Total_Products',
 sum(price) as 'Total Amount of Product',
 min(price) as "Min Price of product",
 max(price) as "Max Price",
 avg(price) as "Avg price"
FROM products_details;

select pd.category_id,ca.category_name,
count(product_id) as 'Total_Products',
 sum(price) as 'Total Amount of Product',
 min(price) as "Min Price of product",
 max(price) as "Max Price",
 avg(price) as "Avg price" from 
products_details as pd inner join categories ca  on ca.category_id = pd.category_id
group by pd.category_id,ca.category_name having sum(price) >100

