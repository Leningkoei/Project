/*
create table Student (
    id varchar(20),
    name varchar(20) not null default '',
    birth varchar(20) not null default '',
    sex varchar(10) not null default '',
    primary key (id)
);
create table Teacher (
    id varchar(20),
    name varchar(20) not null default '',
    primary key (id)
);
create table Course (
    id varchar(20),
    name varchar(20) not null default '',
    teacherId varchar(20),
    primary key (id),
    foreign key (teacherId) references Teacher(id)
);
create table Score (
    studentId varchar(20),
    courseId varchar(20),
    studentScore int,
    foreign key (studentId) references Student(id),
    foreign key (courseId) references Course(id)
)
*//*
--插入学生表测试数据
insert into Student values('01' , 'Zhao Lei' , '1990-01-01' , 'M');
insert into Student values('02' , 'Qian Dian' , '1990-12-21' , 'M');
insert into Student values('03' , 'Sun Feng' , '1990-05-20' , 'M');
insert into Student values('04' , 'Li Yun' , '1990-08-06' , 'M');
insert into Student values('05' , 'Zhou Mei' , '1991-12-01' , 'F');
insert into Student values('06' , 'Wu Lan' , '1992-03-01' , 'F');
insert into Student values('07' , 'Zheng Zhu' , '1989-07-01' , 'F');
insert into Student values('08' , 'Wang Ju' , '1990-01-20' , 'F');
--教师表测试数据
insert into Teacher values('01' , 'Zhang San');
insert into Teacher values('02' , 'Li Si');
insert into Teacher values('03' , 'Wang Wu');
--课程表测试数据
insert into Course values('01' , 'Chinese' , '02');
insert into Course values('02' , 'Maths' , '01');
insert into Course values('03' , 'English' , '03');
--成绩表测试数据
insert into Score values('01' , '01' , 80);
insert into Score values('01' , '02' , 90);
insert into Score values('01' , '03' , 99);
insert into Score values('02' , '01' , 70);
insert into Score values('02' , '02' , 60);
insert into Score values('02' , '03' , 80);
insert into Score values('03' , '01' , 80);
insert into Score values('03' , '02' , 80);
insert into Score values('03' , '03' , 80);
insert into Score values('04' , '01' , 50);
insert into Score values('04' , '02' , 30);
insert into Score values('04' , '03' , 20);
insert into Score values('05' , '01' , 76);
insert into Score values('05' , '02' , 87);
insert into Score values('06' , '01' , 31);
insert into Score values('06' , '03' , 34);
insert into Score values('07' , '02' , 89);
insert into Score values('07' , '03' , 98);
*//*
-- 1.
select distinct Student.*, Score01.name, Score01.studentScore, Score02.name, Score02.studentScore
    from Student, Score, (
        select Course.name, studentId, studentScore
        from Course, Score
        where courseId = '01'
            and Course.id = '01'
    ) as Score01, (
        select Course.name, studentId, studentScore
        from Course, Score
        where courseId = '02'
            and Course.id = '02'
    ) as Score02
    where Student.id = Score01.studentId
        and Student.id = Score02.studentId
        and Score01.studentScore > Score02.studentScore;
*//*
-- 4.
select Student.id, Student.name, avg(Score.studentScore) as avgScore
    from Student, Score
    where Student.id = Score.studentId
    group by Student.id, Student.name, Score.studentId
    having avg(Score.studentScore) < 60
union
select Student.id, Student.name, 0 as avgScore
    from Student, Score
    where Student.id not in (
        select studentId
            from Score
    );
*//*
-- 5.
select a.id, a.name, count(b.courseId) as 选课总数, sum(b.studentScore) as 所有课程的总成绩
    from Student a, Score b
    where a.id = b.studentId
    group by a.id, a.name;
*//*
-- 8.
select e.*
    from Student e
    where e.id not in (
        select a.id
            from Student a, Teacher b, Course c, Score d
            where b.name = 'Zhang San'
                and b.id = c.teacherId
                and c.id = d.courseId
                and d.studentId = a.id
    );
*//*
-- 10.
select a.*
    from Student a, Score b
    where a.id not in (
        select a.id
            from Student a, Score b
            where a.id = b.studentId
                and b.courseId = '02'
    )
    and b.courseId = '01'
    and a.id = b.studentId;
*//*
-- 11.
select a.*
    from Student a
    where a.id not in (
    select a.id
        from Student a, Score b, Score c, Score d
        where a.id = b.studentId
            and a.id = c.studentId
            and a.id = d.studentId
            and b.courseId = '01'
            and c.courseId = '02'
            and d.courseId = '03'
    );
*//*
-- 12
select *
    from Student a, Course b, Score c
    where a.id = c.studentId
        and b.id = c.courseId
        and b.id in (
        select a.courseId
            from Score a
            where a.studentId = '01'
        );
*/
-- 13
select a.* from student a where a.s_id in(
    select distinct s_id from score where s_id!='01' and c_id in(select c_id from score where s_id='01')
    group by s_id 
    having count(1)=(select count(1) from score where s_id='01'));
