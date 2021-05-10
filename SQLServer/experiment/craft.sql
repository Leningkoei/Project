/* 创建表 */
create table Course(
    cId nvarchar(20),
    cName nvarchar(20) not null default '',
    tId nvarchar(20) not null,
    primary key(cId)
);
create table Score(
    sId nvarchar(20),
    cId nvarchar(20),
    sScore int,
    primary key(sId, cId)
);
create table Student(
    sId nvarchar(20),
    sName nvarchar(20) not null default '',
    sBirth nvarchar(20) not null default '',
    sSex nvarchar(10) not null default '',
    primary key(sId)
);
create table Teacher(
    tId nvarchar(20),
    tName nvarchar(20) not null default '',
    primary key(tId)
);
/* 插入数据 */
/* 课程表 */
insert into Course values('01', N'语文', '02');
insert into Course values('02', N'数学', '01');
insert into Course values('03', N'英语', '03');
/* 成绩表 */
insert into Score values('01', '01', 80);
insert into Score values('01', '02', 90);
insert into Score values('01', '03', 99);
insert into Score values('02', '01', 70);
insert into Score values('02', '02', 60);
insert into Score values('02', '03', 80);
insert into Score values('03', '01', 80);
insert into Score values('03', '02', 80);
insert into Score values('03', '03', 80);
insert into Score values('04', '01', 50);
insert into Score values('04', '02', 30);
insert into Score values('04', '03', 20);
insert into Score values('05', '01', 76);
insert into Score values('05', '02', 87);
insert into Score values('06', '01', 31);
insert into Score values('06', '03', 34);
insert into Score values('07', '02', 89);
insert into Score values('07', '03', 98);
/* 学生表 */
insert into Student values('01', N'赵雷', '1990-01-01', N'男');
insert into Student values('02', N'钱电', '1990-12-21', N'男');
insert into Student values('03', N'孙风', '1990-05-20', N'男');
insert into Student values('04', N'李云', '1990-08-06', N'男');
insert into Student values('05', N'周梅', '1991-12-01', N'女');
insert into Student values('06', N'吴兰', '1992-03-01', N'女');
insert into Student values('07', N'郑竹', '1989-07-01', N'女');
insert into Student values('08', N'王菊', '1990-01-20', N'女');
/* 教师表 */
insert into Teacher values('01', N'张三');
insert into Teacher values('02', N'李四');
insert into Teacher values('03', N'王五');
