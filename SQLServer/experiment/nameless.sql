/*
drop table if exists rank;
create table rank(
	sScore char(20),
	sNum int
);
insert into rank values('[0, 20)', 0);
insert into rank values('[20, 40)', 0);
insert into rank values('[40, 60)', 0);
insert into rank values('[60, 80)', 0);
insert into rank values('[80, 100]', 0);
declare
@0to20 int,
@20to40 int,
@40to60 int,
@60to80 int,
@80to100 int,
@cId nvarchar(20);
select @cId = cId from Course where cId = '02';
select @0to20 = count(*) from Score where sScore >= 0 and sScore < 20 and cId = @cId;
update rank set sNum = @0to20 where sScore = '[0, 20)';
select @20to40 = count(*) from Score where sScore >= 20 and sScore < 40 and cId = @cId;
update rank set sNum = @20to40 where sScore = '[20, 40)';
select @40to60 = count(*) from Score where sScore >= 40 and sScore < 60 and cId = @cId;
update rank set sNum = @40to60 where sScore = '[40, 60)';
select @60to80 = count(*) from Score where sScore >= 60 and sScore < 80 and cId = @cId;
update rank set sNum = @60to80 where sScore = '[60, 80)';
select @80to100 = count(*) from Score where sScore >= 80 and sScore <= 100 and cId = @cId;
update rank set sNum = @80to100 where sScore = '[80, 100]';
select * from Score where cId = '02';
select * from rank;
*//*
create table AvgScore(
cName nvarchar(20),
avg float
)
insert into AvgScore values('Chinese', 0);
insert into AvgScore values('Maths', 0);
insert into AvgScore values('English', 0);
declare
@Chinese float,
@Maths float,
@English float;
select @Chinese = AVG(sScore) from Score where cId = '01';
update AvgScore set avg = @Chinese where cName = 'Chinese';
select @Maths = AVG(sScore) from Score where cId = '02';
update AvgScore set avg = @Maths where cName = 'Maths';
select @English = AVG(sScore) from Score where cId = '03';
update AvgScore set avg = @English where cName = 'English';
select * from AvgScore;
*//*
alter table Score add lv char(5);
*/
update Score set lv = 'A' where sScore >= 80 and sScore <= 100;
update Score set lv = 'B' where sScore >= 60 and sScore < 80;
update Score set lv = 'C' where sScore >= 40 and sScore < 60;
update Score set lv = 'D' where sScore >= 20 and sScore < 40;
update Score set lv = 'E' where sScore >= 0 and sScore < 20;
select * from Score;
