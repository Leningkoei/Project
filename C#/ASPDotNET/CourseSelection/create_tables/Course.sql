drop table Course;
create table Course (
	courseId int primary key identity(1, 1),
	courseName varchar(20),
	teacherId int,
	courseDay varchar(20),
	courseTime varchar(20),
	studentNum int
)
