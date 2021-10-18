create view GreatView (studentId, studentName, studentDepartment, studentClass, teacherId, teacherName, teacherDepartment, courseId, courseName, courseDay, courseTime, studentNum, grade) as
select Student.studentId, Student.studentName, Student.studentDepartment, Student.studentClass, Teacher.teacherId, Teacher.teacherName, TeacherDepartment, Course.courseId, Course.courseName, Course.courseDay, Course.courseTime, Course.studentNum, Grade.grade from Student
join Grade on Student.studentId = Grade.studentId
join Course on Grade.courseId = Course.courseId
join Teacher on Course.teacherId = Teacher.teacherId
