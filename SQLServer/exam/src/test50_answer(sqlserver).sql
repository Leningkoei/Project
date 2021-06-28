-- 1����ѯ"01"�γ̱�"02"�γ̳ɼ��ߵ�ѧ������Ϣ���γ̷���
select a.* ,b.s_score,c.s_score from 
student a 
	join score b on a.s_id=b.s_id and b.c_id='01'
	left join score c on a.s_id=c.s_id and c.c_id='02' or c.c_id = NULL where b.s_score>c.s_score

-- 2����ѯ"01"�γ̱�"02"�γ̳ɼ��͵�ѧ������Ϣ���γ̷���
select a.* ,b.s_score,c.s_score from 
student a left join score b on a.s_id=b.s_id and b.c_id='01' or b.c_id=NULL 
join score c on a.s_id=c.s_id and c.c_id='02' where b.s_score<c.s_score

-- 3����ѯƽ���ɼ����ڵ���60�ֵ�ͬѧ��ѧ����ź�ѧ��������ƽ���ɼ�
select b.s_id,b.s_name,ROUND(AVG(a.s_score),2) as avg_score from 
student b 
join score a on b.s_id = a.s_id
GROUP BY b.s_id,b.s_name HAVING ROUND(AVG(a.s_score),2)>=60;

-- 4����ѯƽ���ɼ�С��60�ֵ�ͬѧ��ѧ����ź�ѧ��������ƽ���ɼ�
        -- (�����гɼ��ĺ��޳ɼ���)
select b.s_id,b.s_name,ROUND(AVG(a.s_score),2) as avg_score from 
    student b 
    left join score a on b.s_id = a.s_id
    GROUP BY b.s_id,b.s_name HAVING ROUND(AVG(a.s_score),2)<60
    union
select a.s_id,a.s_name,0 as avg_score from 
    student a 
    where a.s_id not in (
                select distinct s_id from score);

-- 5����ѯ����ͬѧ��ѧ����š�ѧ��������ѡ�����������пγ̵��ܳɼ�
select a.s_id,a.s_name,count(b.c_id) as sum_course,sum(b.s_score) as sum_score from 
    student a 
    left join score b on a.s_id=b.s_id
    GROUP BY a.s_id,a.s_name;

-- 6����ѯ"��"����ʦ������ 
select count(t_id) from teacher where t_name like '��%';
 
-- 7����ѯѧ��"����"��ʦ�ڿε�ͬѧ����Ϣ 
select a.* from 
    student a 
    join score b on a.s_id=b.s_id where b.c_id in(
        select c_id from course where t_id =(
            select t_id from teacher where t_name = '����'));

-- 8����ѯûѧ��"����"��ʦ�ڿε�ͬѧ����Ϣ 
select * from 
    student c 
    where c.s_id not in(
        select a.s_id from student a join score b on a.s_id=b.s_id where b.c_id in(
            select c_id from course where t_id =(
                select t_id from teacher where t_name = '����')));

-- 9����ѯѧ�����Ϊ"01"����Ҳѧ�����Ϊ"02"�Ŀγ̵�ͬѧ����Ϣ
select a.* from 
    student a,score b,score c 
    where a.s_id = b.s_id  and a.s_id = c.s_id and b.c_id='01' and c.c_id='02';

-- 10����ѯѧ�����Ϊ"01"����û��ѧ�����Ϊ"02"�Ŀγ̵�ͬѧ����Ϣ
select a.* from 
    student a 
    where a.s_id in (select s_id from score where c_id='01' ) and a.s_id not in(select s_id from score where c_id='02')

-- 11����ѯû��ѧȫ���пγ̵�ͬѧ����Ϣ 
select s.* from 
    student s where s.s_id in(
        select s_id from score where s_id not in(
            select a.s_id from score a 
                join score b on a.s_id = b.s_id and b.c_id='02'
                join score c on a.s_id = c.s_id and c.c_id='03'
            where a.c_id='01'))

-- 12����ѯ������һ�ſ���ѧ��Ϊ"01"��ͬѧ��ѧ��ͬ��ͬѧ����Ϣ 
select * from student where s_id in(
    select distinct a.s_id from score a where a.c_id in(select a.c_id from score a where a.s_id='01')
    );

-- 13����ѯ��"01"�ŵ�ͬѧѧϰ�Ŀγ���ȫ��ͬ������ͬѧ����Ϣ 
select a.* from student a where a.s_id in(
    select distinct s_id from score where s_id!='01' and c_id in(select c_id from score where s_id='01')
    group by s_id 
    having count(1)=(select count(1) from score where s_id='01'));

-- 14����ѯûѧ��"����"��ʦ���ڵ���һ�ſγ̵�ѧ������ 
select a.s_name from student a where a.s_id not in (
    select s_id from score where c_id = 
                (select c_id from course where t_id =(
                    select t_id from teacher where t_name = '����')) 
                group by s_id);

-- 15����ѯ���ż������ϲ�����γ̵�ͬѧ��ѧ�ţ���������ƽ���ɼ� 
select a.s_id,a.s_name,AVG(b.s_score) from 
    student a 
    left join score b on a.s_id = b.s_id
    where a.s_id in(
            select s_id from score where s_score<60 GROUP BY  s_id having count(1)>=2)
    GROUP BY a.s_id,a.s_name
-- 16������"01"�γ̷���С��60���������������е�ѧ����Ϣ
select a.*,b.c_id,b.s_score from 
    student a,score b 
    where a.s_id = b.s_id and b.c_id='01' and b.s_score<60 ORDER BY b.s_score DESC;
-- 17����ƽ���ɼ��Ӹߵ�����ʾ����ѧ�������пγ̵ĳɼ��Լ�ƽ���ɼ�
select a.s_id,(select s_score from score where s_id=a.s_id and c_id='01') as ����,
                (select s_score from score where s_id=a.s_id and c_id='02') as ��ѧ,
                (select s_score from score where s_id=a.s_id and c_id='03') as Ӣ��,
            round(avg(s_score),2) as ƽ���� from score a  GROUP BY a.s_id ORDER BY ƽ���� DESC;
-- 18.��ѯ���Ƴɼ���߷֡���ͷֺ�ƽ���֣���������ʽ��ʾ���γ�ID���γ�name����߷֣���ͷ֣�ƽ���֣������ʣ��е��ʣ������ʣ�������
--����Ϊ>=60���е�Ϊ��70-80������Ϊ��80-90������Ϊ��>=90
select a.c_id,b.c_name,MAX(s_score) as ��߷�,MIN(s_score) as ��ͷ�,ROUND(AVG(s_score),2) as ƽ����,
    cast((select count(1) from Score where C_ID = a.C_ID and s_score >= 60)*100.0 / (select count(1) from Score where C_ID = a.C_ID) as decimal(18,2)) ������ ,
    cast((select count(1) from Score where C_ID = a.C_ID and s_score >= 70 and s_score < 80 )*100.0 / (select count(1) from Score where C_ID = a.C_ID) as decimal(18,2)) �е��� ,
	cast((select count(1) from Score where C_ID = a.C_ID and s_score >= 80 and s_score < 90 )*100.0 / (select count(1) from score where C_ID = a.C_ID) as decimal(18,2)) ������ ,
	cast((select count(1) from score where C_ID = a.C_ID and s_score >= 90)*100.0 / (select count(1) from score where C_ID = a.C_ID) as decimal(18,2)) ������ 
    from score a left join course b on a.c_id = b.c_id GROUP BY a.c_id,b.c_name


-- 19�������Ƴɼ��������򣬲���ʾ����(ʵ�ֲ���ȫ)
--Score�ظ�ʱ�������ο�ȱ(rank���)
select t.* , px = rank() over(partition by c_id order by s_score desc) from Score t order by t.C_ID , px 
--Score�ظ�ʱ�ϲ�����(DENSE_RANK���)
select t.* , px = DENSE_RANK() over(partition by c_id order by s_score desc) from Score t order by t.C_ID , px 
/*
-- mysqlû��rank����
    select a.s_id,a.c_id,
        @i:=@i +1 as i��������,
        @k:=(case when @score=a.s_score then @k else @i end) as rank����������,
        @score:=a.s_score as score
    from (
        select s_id,c_id,s_score from score WHERE c_id='01' GROUP BY s_id,c_id,s_score ORDER BY s_score DESC
)a,(select @k:=0,@i:=0,@score:=0)s
    union
    select a.s_id,a.c_id,
        @i:=@i +1 as i,
        @k:=(case when @score=a.s_score then @k else @i end) as rank,
        @score:=a.s_score as score
    from (
        select s_id,c_id,s_score from score WHERE c_id='02' GROUP BY s_id,c_id,s_score ORDER BY s_score DESC
)a,(select @k:=0,@i:=0,@score:=0)s
    union
    select a.s_id,a.c_id,
        @i:=@i +1 as i,
        @k:=(case when @score=a.s_score then @k else @i end) as rank,
        @score:=a.s_score as score
    from (
        select s_id,c_id,s_score from score WHERE c_id='03' GROUP BY s_id,c_id,s_score ORDER BY s_score DESC
)a,(select @k:=0,@i:=0,@score:=0)s
*/
-- 20����ѯѧ�����ܳɼ�����������
select m.S_ID ѧ����� , 
m.S_name ѧ������ ,
isnull(sum(s_score),0) �ܳɼ� 
from Student m left join Score n on m.S_ID = n.S_ID 
group by m.S_ID , m.S_name
order by �ܳɼ� desc
/*
select a.s_id,
    @i:=@i+1 as i,
    @k:=(case when @score=a.sum_score then @k else @i end) as rank,
    @score:=a.sum_score as score
from (select s_id,SUM(s_score) as sum_score from score GROUP BY s_id ORDER BY sum_score DESC)a,
    (select @k:=0,@i:=0,@score:=0)s
*/
-- 21����ѯ��ͬ��ʦ���̲�ͬ�γ�ƽ���ִӸߵ�����ʾ 
    select a.t_id,c.t_name,a.c_id,ROUND(avg(s_score),2) as avg_score from course a
        left join score b on a.c_id=b.c_id 
        left join teacher c on a.t_id=c.t_id
        GROUP BY a.c_id,a.t_id,c.t_name ORDER BY avg_score DESC;
-- 22����ѯ���пγ̵ĳɼ���2������3����ѧ����Ϣ���ÿγ̳ɼ�
--Score�ظ�ʱ�������ο�ȱ
select * from 
(select t.* , px = (select count(1) from Score where C_ID = t.C_ID and s_score > t.s_score) + 1 from score t) m 
where px between 2 and 3 order by m.c_id , m.px 
--Score�ظ�ʱ�ϲ�����
select * from (select t.* , px = (select count(distinct s_score) from score where C_ID = t.C_ID and s_score >= t.s_score) from score t) m where px between 2 and 3 order by m.c_id , m.px 
/*
            select d.*,c.����,c.s_score,c.c_id from (
                select a.s_id,a.s_score,a.c_id,@i:=@i+1 as ���� from score a,(select @i:=0)s where a.c_id='01'    
            )c
            left join student d on c.s_id=d.s_id
            where ���� BETWEEN 2 AND 3
            UNION
            select d.*,c.����,c.s_score,c.c_id from (
                select a.s_id,a.s_score,a.c_id,@j:=@j+1 as ���� from score a,(select @j:=0)s where a.c_id='02'    
            )c
            left join student d on c.s_id=d.s_id
            where ���� BETWEEN 2 AND 3
            UNION
            select d.*,c.����,c.s_score,c.c_id from (
                select a.s_id,a.s_score,a.c_id,@k:=@k+1 as ���� from score a,(select @k:=0)s where a.c_id='03'    
            )c
            left join student d on c.s_id=d.s_id
            where ���� BETWEEN 2 AND 3;
*/
-- 23��ͳ�Ƹ��Ƴɼ����������������γ̱��,�γ�����,[100-85],[85-70],[70-60],[0-60]����ռ�ٷֱ�

select m.c_id �γ̱��, m.c_name �γ�����,
(select count(1) from score where c_id = m.c_id and s_score < 60 ) [0-60] ,
cast((select count(1) from score where c_id = m.c_id and s_score < 60)*100.0 / (select count(1) from score where c_id = m.c_id) as decimal(18,2)) �ٷֱ� ,
(select count(1) from score where c_id = m.c_id and s_score >= 60 and s_score < 70) [60-70] ,
cast((select count(1) from score where c_id = m.c_id and s_score >= 60 and s_score < 70)*100.0 / (select count(1) from score where c_id = m.c_id) as decimal(18,2)) �ٷֱ� ,
(select count(1) from score where c_id = m.c_id and s_score >= 70 and s_score < 85) [70-85],
cast((select count(1) from score where c_id = m.c_id and s_score >= 70 and s_score < 85)*100.0 / (select count(1) from score where c_id = m.c_id) as decimal(18,2)) �ٷֱ� ,
(select count(1) from score where c_id = m.c_id and s_score >= 85) [85-100],
cast((select count(1) from score where c_id = m.c_id and s_score >= 85)*100.0 / (select count(1) from score where c_id = m.c_id) as decimal(18,2)) �ٷֱ� 
from Course m 
order by m.c_id


 /*       select distinct f.c_name,a.c_id,b.`85-100`,b.�ٷֱ�,c.`70-85`,c.�ٷֱ�,d.`60-70`,d.�ٷֱ�,e.`0-60`,e.�ٷֱ� from score a
                left join (select c_id,SUM(case when s_score >85 and s_score <=100 then 1 else 0 end) as `85-100`,
                                            ROUND(100*(SUM(case when s_score >85 and s_score <=100 then 1 else 0 end)/count(*)),2) as �ٷֱ�
                                from score GROUP BY c_id)b on a.c_id=b.c_id
                left join (select c_id,SUM(case when s_score >70 and s_score <=85 then 1 else 0 end) as `70-85`,
                                            ROUND(100*(SUM(case when s_score >70 and s_score <=85 then 1 else 0 end)/count(*)),2) as �ٷֱ�
                                from score GROUP BY c_id)c on a.c_id=c.c_id
                left join (select c_id,SUM(case when s_score >60 and s_score <=70 then 1 else 0 end) as `60-70`,
                                            ROUND(100*(SUM(case when s_score >60 and s_score <=70 then 1 else 0 end)/count(*)),2) as �ٷֱ�
                                from score GROUP BY c_id)d on a.c_id=d.c_id
                left join (select c_id,SUM(case when s_score >=0 and s_score <=60 then 1 else 0 end) as `0-60`,
                                            ROUND(100*(SUM(case when s_score >=0 and s_score <=60 then 1 else 0 end)/count(*)),2) as �ٷֱ�
                                from score GROUP BY c_id)e on a.c_id=e.c_id
                left join course f on a.c_id = f.c_id
	*/

-- 24����ѯѧ��ƽ���ɼ��������� 

		select t.* , px = rank() over(order by ƽ���ɼ� desc) from
		(
		select m.S_ID ѧ����� ,
		m.S_name ѧ������ ,
		isnull(cast(avg(s_score) as decimal(18,2)),0) ƽ���ɼ� 
		from Student m left join score n on m.S_ID = n.S_ID
		group by m.S_ID , m.S_name
		) t
		order by px

		select t.* , px = DENSE_RANK() over(order by ƽ���ɼ� desc) from
		(
		select m.S_ID ѧ����� ,
		m.S_name ѧ������ ,
		isnull(cast(avg(s_score) as decimal(18,2)),0) ƽ���ɼ� 
		from Student m left join score n on m.S_ID = n.S_ID
		group by m.S_ID , m.S_name
		) t
		order by px
/*
        select a.s_id,
                @i:=@i+1 as '��������ȱ����',
                @k:=(case when @avg_score=a.avg_s then @k else @i end) as '������ȱ����',
                @avg_score:=avg_s as 'ƽ����'
        from (select s_id,ROUND(AVG(s_score),2) as avg_s from score GROUP BY s_id)a,(select @avg_score:=0,@i:=0,@k:=0)b;
*/
-- 25����ѯ���Ƴɼ�ǰ�����ļ�¼
            -- 1.ѡ��b����a���ɼ����������
            -- 2.ѡ���ȵ�ǰid�ɼ���� С��������
        select a.s_id,a.c_id,a.s_score from score a 
            left join score b on a.c_id = b.c_id and a.s_score<b.s_score
            group by a.s_id,a.c_id,a.s_score HAVING COUNT(b.s_id)<3
            ORDER BY a.c_id,a.s_score DESC
-- 26����ѯÿ�ſγ̱�ѡ�޵�ѧ���� 
        select c_id,count(s_id) from score a GROUP BY c_id
-- 27����ѯ��ֻ�����ſγ̵�ȫ��ѧ����ѧ�ź����� 
        select s_id,s_name from student where s_id in(
                select s_id from score GROUP BY s_id HAVING COUNT(c_id)=2);
-- 28����ѯ������Ů������ 
        select s_sex,COUNT(s_sex) as ����  from student GROUP BY s_sex
-- 29����ѯ�����к���"��"�ֵ�ѧ����Ϣ
        select * from student where s_name like '%��%';
-- 30����ѯͬ��ͬ��ѧ����������ͳ��ͬ������ 
        select a.s_name,a.s_sex,count(*) from student a  JOIN 
                    student b on a.s_id !=b.s_id and a.s_name = b.s_name and a.s_sex = b.s_sex
        GROUP BY a.s_name,a.s_sex
-- 31����ѯ1990�������ѧ������
        select s_name from student where s_birth like '1990%'
-- 32����ѯÿ�ſγ̵�ƽ���ɼ��������ƽ���ɼ��������У�ƽ���ɼ���ͬʱ�����γ̱���������� 
    select c_id,ROUND(AVG(s_score),2) as avg_score from score GROUP BY c_id ORDER BY avg_score DESC,c_id ASC
-- 33����ѯƽ���ɼ����ڵ���85������ѧ����ѧ�š�������ƽ���ɼ� 
select a.S_ID , a.S_name , cast(avg(b.s_score) as decimal(18,2)) avg_score
from Student a , score b
where a.S_ID = b.S_ID
group by a.S_ID , a.S_name
having cast(avg(b.s_score) as decimal(18,2)) >= 85
order by a.S_ID
--����
    select a.s_id,b.s_name,ROUND(avg(a.s_score),2) as avg_score from score a
        left join student b on a.s_id=b.s_id GROUP BY a.s_id,b.s_name HAVING avg(a.s_score)>=85
-- 34����ѯ�γ�����Ϊ"��ѧ"���ҷ�������60��ѧ�������ͷ��� 
        select a.s_name,b.s_score from score b LEFT JOIN student a on a.s_id=b.s_id where b.c_id=(
                    select c_id from course where c_name ='��ѧ') and b.s_score<60
-- 35����ѯ����ѧ���Ŀγ̼���������� 
        select a.s_id,a.s_name,
                    SUM(case c.c_name when '����' then b.s_score else 0 end) as '����',
                    SUM(case c.c_name when '��ѧ' then b.s_score else 0 end) as '��ѧ',
                    SUM(case c.c_name when 'Ӣ��' then b.s_score else 0 end) as 'Ӣ��',
                    SUM(b.s_score) as  '�ܷ�'
        from student a left join score b on a.s_id = b.s_id 
        left join course c on b.c_id = c.c_id 
        GROUP BY a.s_id,a.s_name
 -- 36����ѯ�κ�һ�ſγ̳ɼ���70�����ϵ��������γ����ƺͷ����� 
            select a.s_name,b.c_name,c.s_score from course b left join score c on b.c_id = c.c_id
                left join student a on a.s_id=c.s_id where c.s_score>=70
-- 37����ѯ������Ŀγ�
        select a.s_id,a.c_id,b.c_name,a.s_score from score a left join course b on a.c_id = b.c_id
            where a.s_score<60 
--38����ѯ�γ̱��Ϊ01�ҿγ̳ɼ���80�����ϵ�ѧ����ѧ�ź�������
        select a.s_id,b.s_name from score a LEFT JOIN student b on a.s_id = b.s_id
            where a.c_id = '01' and a.s_score>80
-- 39����ÿ�ſγ̵�ѧ������ 
        select count(*) from score GROUP BY c_id;

-- 40����ѯѡ��"����"��ʦ���ڿγ̵�ѧ���У��ɼ���ߵ�ѧ����Ϣ����ɼ�
        -- ��ѯ��ʦid   
        select c_id from course c,teacher d where c.t_id=d.t_id and d.t_name='����'
        -- ��ѯ��߷֣���������ͬ������
        select MAX(s_score) from score where c_id='02'
        -- ��ѯ��Ϣ
        select a.*,b.s_score,b.c_id,c.c_name from student a
            LEFT JOIN score b on a.s_id = b.s_id
            LEFT JOIN course c on b.c_id=c.c_id
            where b.c_id =(select c_id from course c,teacher d where c.t_id=d.t_id and d.t_name='����')
            and b.s_score in (select MAX(s_score) from score where c_id='02')
-- 41����ѯ��ͬ�γ̳ɼ���ͬ��ѧ����ѧ����š��γ̱�š�ѧ���ɼ� 
    select DISTINCT b.s_id,b.c_id,b.s_score from score a,score b where a.c_id != b.c_id and a.s_score = b.s_score
-- 42����ѯÿ�Ź��ɼ���õ�ǰ���� 
        -- ţ�Ƶ�д��
    select a.s_id,a.c_id,a.s_score from score a
        where (select COUNT(1) from score b where b.c_id=a.c_id and b.s_score>=a.s_score)<=2 ORDER BY a.c_id
-- 43��ͳ��ÿ�ſγ̵�ѧ��ѡ������������5�˵Ŀγ̲�ͳ�ƣ���Ҫ������γ̺ź�ѡ����������ѯ����������������У���������ͬ�����γ̺���������  
        select c_id,count(*) as total from score GROUP BY c_id HAVING count(*)>5 ORDER BY total,c_id ASC
-- 44����������ѡ�����ſγ̵�ѧ��ѧ�� 
        select s_id,count(*) as sel from score GROUP BY s_id HAVING count(*)>=2
-- 45����ѯѡ����ȫ���γ̵�ѧ����Ϣ 
        select * from student where s_id in(        
            select s_id from score GROUP BY s_id HAVING count(*)=(select count(*) from course))
--46����ѯ��ѧ��������
select * , case when right(convert(varchar(10),getdate(),120),5) < right(convert(varchar(10),s_birth,120),5) then datediff(yy , s_birth , getdate()) - 1 else datediff(yy , s_birth , getdate()) end ���� from student

    -- ���ճ����������㣬��ǰ���� < �������µ������������һ
	/*
    select s_birth,(DATE_FORMAT(NOW(),'%Y')-DATE_FORMAT(s_birth,'%Y') - 
                (case when DATE_FORMAT(NOW(),'%m%d')>DATE_FORMAT(s_birth,'%m%d') then 0 else 1 end)) as age
        from student;
	*/

-- 47����ѯ���ܹ����յ�ѧ��
select * from student where datediff(week,datename(yy,getdate()) + right(convert(varchar(10),s_birth,120),6),getdate()) = 0
/*
    select * from student where WEEK(DATE_FORMAT(NOW(),'%Y%m%d'))=WEEK(s_birth)
    select * from student where YEARWEEK(s_birth)=YEARWEEK(DATE_FORMAT(NOW(),'%Y%m%d'))
    select WEEK(DATE_FORMAT(NOW(),'%Y%m%d'))
	*/
-- 48����ѯ���ܹ����յ�ѧ��
select * from student where datediff(week,datename(yy,getdate()) + right(convert(varchar(10),s_birth,120),6),getdate()) = -1
  --  select * from student where WEEK(DATE_FORMAT(NOW(),'%Y%m%d'))+1 =WEEK(s_birth)

-- 49����ѯ���¹����յ�ѧ��
select * from student where datediff(mm,datename(yy,getdate()) + right(convert(varchar(10),s_birth,120),6),getdate()) = 0
--    select * from student where MONTH(DATE_FORMAT(NOW(),'%Y%m%d')) =MONTH(s_birth)
-- 50����ѯ���¹����յ�ѧ��
select * from student where datediff(mm,datename(yy,getdate()) + right(convert(varchar(10),s_birth,120),6),getdate()) = -1
--   select * from student where MONTH(DATE_FORMAT(NOW(),'%Y%m%d'))+1 =MONTH(s_birth)