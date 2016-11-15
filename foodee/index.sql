set names utf8;
drop database if exists foodee;
create database foodee charset=utf8;
use foodee;

create table mtype(
    tid int primary key auto_increment,
    tname varchar(128)
);

insert into mtype values
(null,'饮品'),
(null,'肉食'),
(null,'面食'),
(null,'主食');

create table menu(
    mid int primary key auto_increment,
    mname varchar(128),
    pic varchar(128),
    price float(10,2),
    detail varchar(256),
    type varchar(128)
);

insert into menu values
(1,'菠萝汁','res_img_5.jpg','7.50','Far far away, behind the word mountains.','饮品'),
(2,'绿茶','res_img_6.jpg','7.99','Far far away, behind the word mountains.','饮品'),
(3,'果汁','res_img_7.jpg','12.99','Far far away, behind the word mountains.','饮品'),
(4,'蒙特卡罗玫瑰汁','res_img_5.jpg','12.99','Far far away, behind the word mountains.','饮品'),
(5,'牛排','res_img_3.jpg','17.50','Far far away, behind the word mountains.','肉食'),
(6,'番茄鸡肉','res_img_4.jpg','7.99','Far far away, behind the word mountains.','肉食'),
(7,'意大利香肠','res_img_2.jpg','12.99','Far far away, behind the word mountains.','肉食'),
(8,'牛肉扒','res_img_8.jpg','15.99','Far far away, behind the word mountains.','肉食'),
(9,'菠萝汁','res_img_5.jpg','7.50','Far far away, behind the word mountains.','面食'),
(10,'绿茶','res_img_6.jpg','7.99','Far far away, behind the word mountains.','面食'),
(11,'果汁','res_img_7.jpg','12.99','Far far away, behind the word mountains.','面食'),
(12,'蒙特卡罗玫瑰汁','res_img_5.jpg','12.99','Far far away, behind the word mountains.','面食'),
(13,'牛排','res_img_3.jpg','17.50','Far far away, behind the word mountains.','主食'),
(14,'番茄鸡肉','res_img_4.jpg','7.99','Far far away, behind the word mountains.','主食'),
(15,'意大利香肠','res_img_2.jpg','12.99','Far far away, behind the word mountains.','主食'),
(16,'牛肉扒','res_img_8.jpg','15.99','Far far away, behind the word mountains.','主食');

create table feature(
    sid int primary key auto_increment,
    sname varchar(128),
    pic varchar(128),
    price float(10,2),
    sdetail varchar(256)
);

insert into feature values
(1,'新鲜蘑菇','res_img_1.jpg','7.50','Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'),
(2,'铁板鸡肉沙拉','res_img_2.jpg','12.00','Far far away, behind the word mountains.'),
(3,'奶酪和大蒜烤面包片','res_img_8.jpg','4.50','Far far away, behind the word mountains.'),
(4,'有机蛋','res_img_7.jpg','4.99','Far far away, behind the word mountains.'),
(5,'脆皮鸡肉与沙拉','res_img_6.jpg','8.50','Far far away, behind the word mountains.'),
(6,'番茄鸡肉汤','res_img_3.jpg','12.99','Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.');

create table myorder(
    oid int primary key auto_increment,
    name varchar(32),
    email varchar(128),
    occation varchar(32),
    odate bigint,
    message varchar(256)
);
