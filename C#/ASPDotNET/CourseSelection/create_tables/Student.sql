drop table Student;
create table Student (
	studentId int primary key identity(1,1),
	studentName varchar(20),
	studentDepartment varchar(20),
	studentClass varchar(20)
)
