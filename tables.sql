-------------------------------product_categories--------------------


create table product_categories( id int not null primary key auto_increment,
cayegory_name varchar(200));

-------------------------products----------------------


create table products (id int NOT NULL PRIMARY KEY auto_increment,
    Product_name varchar(55) NOT NULL,
    Product_desc varchar(5500),
	Product_price Decimal(9,3),
    category_id int ,
	FOREIGN KEY(category_id ) REFERENCES product_categories(id ),
    suplier_username int 
	
);

------------------------------orders----------------------

create table orders(order_id int NOT NULL PRIMARY KEY auto_increment,
      order_date date,
      user_id int,
	 FOREIGN KEY(user_id ) REFERENCES user(id ),
       total decimal(9,3),
     status varchar(100)
     
);

--------------------------user----------------------------


create table user(id int NOT NULL PRIMARY KEY auto_increment,
     first_name varchar(150),
     last_name varchar(150),
     username varchar(150),
     password varchar(150),
     address varchar(150),
     telephone int
	 
     
);


------------------------------user_payment----------------

create table user_payment(id int NOT NULL PRIMARY KEY auto_increment,
user_id  int,
 	 FOREIGN KEY(user_id ) REFERENCES user(id ),
     provider varchar(200),
     payment_type varchar(200),
     bank_name varchar(200),
     account_no int
	 
     
);

----------------------order_details--------------------


create table order_details(id int NOT NULL PRIMARY KEY auto_increment,
order_id int,
 	 FOREIGN KEY(order_id ) REFERENCES orders(order_id ),
   Product_id int,
	 FOREIGN KEY(Product_id ) REFERENCES products(id ),
     quantity int,
     Delivery_partner_id int,
 	 FOREIGN KEY( Delivery_partner_id ) REFERENCES  Delivery_partner(id )
     
);

-------------------------payment-----------------

create table payment(id int NOT NULL PRIMARY KEY auto_increment,
     order_id int,
 	 FOREIGN KEY(order_id ) REFERENCES orders(order_id ),
 	 mode_of_payment varchar(200),
     status varchar(200)
     
);

------------------------delivery_partner-------------

create table Delivery_partner(id int NOT NULL PRIMARY KEY auto_increment,
 	  Delivery_partner_name varchar(200),
     Delivery_partner_contact varchar(200),
     Delivery_partner_email varchar(200)
     
     
);


--------------------------seller---------------

create table seller(id int NOT NULL PRIMARY KEY auto_increment,
 	suppliername              VARCHAR(75) NOT NULL,
    supplier_username              VARCHAR(75) NOT NULL,
     supplierprimarycontact    CHAR(20) NOT NULL,
     suppliersecondarycontact  CHAR(20) NULL,
     supplieremail             VARCHAR(50) NULL,
     supplieraddress           VARCHAR(500) NOT NULL,
     suppliercity              VARCHAR(75) NOT NULL,
     supplierstate             VARCHAR(75) NOT NULL,
     suppliercountry           VARCHAR(75) NOT NULL,
     supplierzipcode           VARCHAR(75) NOT NULL
     
);
