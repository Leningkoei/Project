/* 进库总表 */
create table InputItem (
	ID int primary key identity(1, 1),
	InputDate varchar(20),
	MiddleShopID varchar(20),
	MiddleShopName varchar(20),
	ItemID varchar(20),
	ItemName varchar(20),
	ItemNum int,
	ItemPrice int,
	SumPrice int,
	FromShopID varchar(20),
	FromShopName varchar(20)
);
/* 出库总表 */
create table OutputItem (
	ID int primary key identity(-1, -1),
	InputDate varchar(20),
	MiddleShopID varchar(20),
	MiddleShopName varchar(20),
	ItemID varchar(20),
	ItemName varchar(20),
	ItemNum int,
	ItemPrice int,
	SumPrice int,
	ToShopID varchar(20),
	ToShopName varchar(20),
);
/* 库存商品表 */
create table MiddleShopItem (
	ItemID varchar(20) primary key,
	ItemName varchar(20),
	ItemNum int
);
/* 商户信息表 */
create table FromShopInfor (
	ID varchar(20) primary key,
	Name varchar(20),
	Telephone varchar(11),
	MiddleShopID varchar(20),
	MiddleShopName varchar(20)
);
/* 客户信息表 */
create table ToShopInfor (
	ID varchar(20) primary key,
	Name varchar(20),
	Telephone varchar(11),
	MiddleShopID varchar(20),
	MiddleShopName varchar(20)
);
/* 代销处信息表 */
create table MiddleShopInfor (
	Id varchar(20) primary key,
	Manager varchar(20),
	telephone varchar(11)
);
/* 财务总表 */
create table Profit (
	Date varchar(20) primary key,
	Money int,
	OutputMoney int,
	InputMoney int
);
