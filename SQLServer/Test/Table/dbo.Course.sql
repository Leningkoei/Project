CREATE TABLE [dbo].[Course] (
    [c_Id]   VARCHAR (20) NOT NULL,
    [c_Name] VARCHAR (20) DEFAULT ('') NOT NULL,
    [t_Id]   VARCHAR (20) NOT NULL,
    PRIMARY KEY(c_Id)
);

