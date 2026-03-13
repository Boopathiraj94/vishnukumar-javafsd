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

use amazon_db;
select pd.category_id,ca.category_name,
count(product_id) as 'Total_Products',
 sum(price) as 'Total Amount of Product',
 min(price) as "Min Price of product",
 max(price) as "Max Price",
 avg(price) as "Avg price" from 
products_details as pd 
inner join categories ca  on ca.category_id = pd.category_id

group by pd.category_id,ca.category_name having sum(price) >100;

create table employees(emp_id int auto_increment primary key,
first_name varchar(200) ,last_name varchar(100),
ceated_at timestamp default current_timestamp()
);
create table contractor(emp_id int auto_increment primary key,
first_name varchar(200) ,last_name varchar(100),
ceated_at timestamp default current_timestamp()
);
insert into employees(first_name,last_name) 
values('vishnu1','df'),('raja1','df'),('siva1','sdr');
 
 
insert into contractor(first_name,last_name) 
values('vishnu1','df'),('raja1','df'),('siva1','sdr');
 

alter table employees add emp_type varchar(300);

select * from employees;
select * from contractor;
select first_name,last_name,'employee' as emp_type from employees
union all
select first_name,last_name, 'contractor' as emp_type from contractor;

create table customers(customer_id int auto_increment primary key,
name varchar(200),phone varchar(20),added_at timestamp default current_timestamp()
);
INSERT INTO customers (name, phone) VALUES ('Arun Kumar', '9876543210');

INSERT INTO customers (name, phone) VALUES ('Priya Sharma', '9123456780');

INSERT INTO customers (name, phone) VALUES ('Rahul Verma', '9988776655');

INSERT INTO customers (name, phone) VALUES ('Sneha Iyer', '9012345678');

INSERT INTO customers (name, phone) VALUES ('Vikram Singh', '9345678901');

INSERT INTO customers (name, phone) VALUES ('Anita Das', '9456781234');

INSERT INTO customers (name, phone) VALUES ('Karthik Raj', '9567892345');

INSERT INTO customers (name, phone) VALUES ('Meena Reddy', '9678903456');

INSERT INTO customers (name, phone) VALUES ('Suresh Patel', '9789014567');

INSERT INTO customers (name, phone) VALUES ('Divya Nair', '9890125678');

select * from customers;
create table orders (order_id int auto_increment primary key,
customer_id int ,
constraint fk_1 foreign key(customer_id) references customers(customer_id)
);
INSERT INTO orders (customer_id) VALUES (1);
INSERT INTO orders (customer_id) VALUES (1);
INSERT INTO orders (customer_id) VALUES (2);
INSERT INTO orders (customer_id) VALUES (1);
INSERT INTO orders (customer_id) VALUES (1);
INSERT INTO orders (customer_id) VALUES (6);
INSERT INTO orders (customer_id) VALUES (7);
INSERT INTO orders (customer_id) VALUES (8);
INSERT INTO orders (customer_id) VALUES (9);
INSERT INTO orders (customer_id) VALUES (2);

INSERT INTO orders (customer_id) VALUES (1);
INSERT INTO orders (customer_id) VALUES (2);
INSERT INTO orders (customer_id) VALUES (4);
INSERT INTO orders (customer_id) VALUES (4);
INSERT INTO orders (customer_id) VALUES (5);
INSERT INTO orders (customer_id) VALUES (4);
INSERT INTO orders (customer_id) VALUES (7);
INSERT INTO orders (customer_id) VALUES (8);
INSERT INTO orders (customer_id) VALUES (5);
INSERT INTO orders (customer_id) VALUES (10);


select c.customer_id,c.name,c.phone
, count(o.customer_id) as count_of_orders,
(case when count(o.customer_id) >=5 then "VIP"
	 when count(o.customer_id) BETWEEN 2 AND 3 then "regular"
     else "New"
end) as "category of customers"
 from orders as o inner join customers as c
 on c.customer_id = o.customer_id group by c.customer_id,c.name,c.phone
 order by count(o.customer_id) desc ;
 
 -- trigger 
 use amazon_db;
 select * from customers;
alter table customers add added_by int ; 
update customers set added_by = 1;

create table customer_audit (audit_id int auto_increment primary key,
customer_id int ,name varchar(200), phone varchar(100),action_type varchar(100),
added_at  timestamp default current_timestamp()
);
alter table customer_audit add added_by int;
select * from customer_audit;
-- after insert
delimiter //
create trigger customer_audit_after_insert
after insert on customers
for each row
begin
  insert into customer_audit(customer_id,name,phone,added_by,action_type)
  values(NEW.customer_id,NEW.name,NEW.phone,NEW.added_by,"INSERT");

end //
delimiter ;

-- before update
delimiter //
create trigger customer_audit_before_update
before update on customers
for each row
begin
  insert into customer_audit(customer_id,name,phone,added_by,action_type)
  values(OLD.customer_id,OLD.name,OLD.phone,OLD.added_by,"UPDATE");

end //
delimiter ;


-- before delete
delimiter //
create trigger customer_audit_before_delete
before delete on customers
for each row
begin
  insert into customer_audit(customer_id,name,phone,added_by,action_type)
  values(OLD.customer_id,OLD.name,OLD.phone,OLD.added_by,"DELETE");

end //
delimiter ;

INSERT INTO customers (name, phone,added_by) VALUES ('Vishnu Kumar', '9876543210',2);
update customers set name ='Vishnu kumar 1' where customer_id = 11;

delete from customers where customer_id = 11;
select * from customers;
select * from customer_audit;










