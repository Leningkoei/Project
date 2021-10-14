drop table Teacher;
create table Teacher (
	teacherId int primary key identity(1, 1),
	teacherName varchar(20),
	teacherDeparment varchar(20)
)
