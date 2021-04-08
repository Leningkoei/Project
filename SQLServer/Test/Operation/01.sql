select
	Student.s_Name,
	c_Id_01.c_Id,
	c_Id_01.s_Score,
	c_Id_02.c_Id,
	c_Id_02.s_Score
from
	Student,
	(
		select
			Student.s_Id,
			Score.c_Id,
			Score.s_Score
		from
			Student,
			Score
		where
			Student.s_Id = Score.s_Id
			and
			c_Id = '01'
	)as
	c_Id_01,
	(
		select
			Student.s_Id,
			Score.c_Id,
			Score.s_Score
		from
			Student,
			Score
		where
			Student.s_Id = Score.s_Id
			and
			c_Id = '02'
	)as
	c_Id_02
where
	Student.s_Id = c_Id_01.s_Id
	and
	Student.s_Id = c_Id_02.s_Id
	and
	c_Id_01.s_Score > c_Id_02.s_Score;