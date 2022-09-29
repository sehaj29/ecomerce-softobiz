---------------------product_categories-----------------

insert into product_categories(cayegory_name) values("books");
insert into product_categories(cayegory_name) values("chocolates");
insert into product_categories(cayegory_name) values("baby products");
insert into product_categories(cayegory_name) values("computer games");
insert into product_categories(cayegory_name) values("music");
insert into product_categories(cayegory_name) values("sports");
insert into product_categories(cayegory_name) values("toys");

-----------------------------users------------------

insert into user(first_name ,
     last_name ,
     username ,
     password ,
     address ,
     telephone ,
     email) values
values('sehaj','chawla','sehaj199','abc','civil,ludhiana','965432654','seh@gmail.com'),
values('shalu','arora','shalu199','swd','flower,ludhiana','865432654','sha@gmail.com'),
values(rahul','dey','rahul199','ytr','basant,ludhiana','665432654','rah@gmail'),
values('raghav','kapoor','raghav199','uyhg','haibowal,ludhiana','565432654','ragv@gmail'),
values('gurinder','singh','gurinder199','jhg','noida,delhi','465432654','guri@gmail');


-------------------------products------------------------

insert into products(
        Product_name ,
        Product_desc ,
	Product_price,
        category_id int ,
        suplier_username 
values('Books','I am fine and neither are you','I am fine and neither are you in category Books',137.23,1,sanju),
values('Books','The beautiful chaos of growing up','The beautiful chaos of growing up in category Books',134.84,1,sanju),
values('Books','War and Peace','War and Peace in category Books',131.99),
values('Books','The Adventures of Huckleberry','The Adventures of Huckleberry in category Books',120.79),
values('Books','The stories of Anton Chekhov','The stories of Anton Chekhov in category Books',187.21),
values('Baby Products','Two-in-one car seat','Two-in-one car seat in category Baby Products',133.59),
values('Baby Products','Playtex Diaper','Playtex Diaper in category Baby Products',153.65),
values('Baby Products','Solly Baby Wrap','Solly Baby Wrap in category Baby Products',61.24),
values('Baby Products','BabyBorn Bouncer Bliss','BabyBorn Bouncer Bliss in category Baby Products',131.43),
values('Computer Games','Call of Duty','Call of Duty in category Computer Games',40.06),
values('Computer Games','PUBG PC','PUBG PC in category Computer Games',6.13),
values('Computer Games','Mario','Mario in category Computer Games',187.2),
values('Computer Games','Fifa 19','Fifa 19 in category Computer Games',94.21),
values('Computer Games','Fortnite','Fortnite in category Computer Games',135.13),
values('Sports','Volleyball','Volleyball in category Sports',6.97),
values('Sports','Basketball','Basketball in category Sports',22.49),
values('Sports','Badminton','Badminton in category Sports',132.06),
values('Sports','Jogging Shoes','Jogging Shoes in category Sports',165.62),

---------------------------------delivery_partner------------------------------------

insert into delivery
_partner(
        delivery_partner_name ,
        phine_no ,
	email,
        compant_name
(Aramex	,345698	,Ara@gmail.com	,Aramex pvt ltd)
(EBiz	,345667	,Eco@gmail.com	,eBiz pvt ltd)

--------------------------------------------order_details-----------------------------

INSERT INTO `ecommerce`.`order_details` (`id`, `order_id`, `Product_id`, `quantity`, `Delivery_partner_id`) VALUES ('1', '1', '5', '3', '1');
INSERT INTO `ecommerce`.`order_details` (`id`, `order_id`, `Product_id`, `quantity`, `Delivery_partner_id`) VALUES ('2', '1', '4', '2', '1');
INSERT INTO `ecommerce`.`order_details` (`id`, `order_id`, `Product_id`, `quantity`, `Delivery_partner_id`) VALUES ('3', '2', '6', '3', '1');
INSERT INTO `ecommerce`.`order_details` (`id`, `order_id`, `Product_id`, `quantity`, `Delivery_partner_id`) VALUES ('4', '2', '7', '2', '1');


--------------------------------------------order-----------------------------------------

insert into orders(
        dtae ,
        price ,
	status
(0002-09-22,1,200.000,processed)
0004-09-22,1,400.000,processed)
2024-01-22,2,259.000,processed)

---------------------------------------------sellers-----------------------------

insert into sellers (
          suppliername  
          supplier_username  
          supplierprimarycontact  
          suppliersecondarycontact  
          supplieremail 
          supplieraddress  
          suppliercity  
          supplierstate 
          suppliercountry 
          supplierzipcode
values(sanjay,sanju,8765765,876587655,sanj1@gmail.com,civil,ludhiana,ludhiana,punjab)
values(sehj,sehaj123,34567890,34444556,seh1@gmail.com,haibowal,gujrat,amritsar,punjab)
values(rahul,rahu199,98765443,3456789,rahu@gmail.com,city,ludhiana,ludhiana,punjab)


--------------------------------------------payment------------------------------------

INSERT INTO `ecommerce`.`payment` (`id`, `order_id`, `mode_of_payment`, `status`) VALUES ('1', '1', 'paypal', 'sucessful');
INSERT INTO `ecommerce`.`payment` (`id`, `order_id`, `mode_of_payment`, `status`) VALUES ('2', '2', 'Gpay', 'sucessful');
INSERT INTO `ecommerce`.`payment` (`id`, `order_id`, `mode_of_payment`, `status`) VALUES ('3', '3', 'paypal', 'sucessful');

							
			