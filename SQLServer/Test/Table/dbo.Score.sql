CREATE TABLE [dbo].[Score]
(
	s_Id varchar(20),
	c_Id varchar(20),
	s_Score int,
	primary key(s_Id, c_Id)
)
