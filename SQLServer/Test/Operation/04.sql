select
	Student.s_Id,
	Student.s_Name,
	/*
	c_Id_01.c_Id,
	c_Id_01.s_Score,
	c_Id_02.c_Id,
	c_Id_02.s_Score,
	c_Id_03.c_Id,
	c_Id_03.s_Score,
	*/
	s_AvgScore.s_AvgScore
from
	Student,
	/*
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
			Score.c_Id = '01'
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
			Score.c_Id = '02'
	)as
	c_Id_02,
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
			Score.c_Id = '03'
	)as
	c_Id_03,
	*/
	(
		select
			Score.s_Id,
			(
				avg(Score.s_Score)
			)as
			s_AvgScore
		from
			Score
		group by
			Score.s_Id
	)as
	s_AvgScore
where
	/*
	Student.s_Id = c_Id_01.s_Id
	and
	Student.s_Id = c_Id_02.s_Id
	and
	Student.s_Id = c_Id_03.s_Id
	and
	*/
	Student.s_Id = s_AvgScore.s_Id
	and
	s_AvgScore.s_AvgScore < 60
