using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebApplication1
{
    public partial class EducationalAdministrationPage : System.Web.UI.Page
    {
        // DatebaseControler databaseControler;
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        // buttons;
        #region
        // student;
        #region
        // add;
        protected void Button1_Click(object sender, EventArgs e)
        {
            string name = this.TextBox2.Text.Trim();
            string department = this.TextBox3.Text.Trim();
            string clas = this.TextBox4.Text.Trim();
            if (name != "" && department != "" && clas != "") {
                DatebaseControler databaseControler = new DatebaseControler();
                string commandText = $"insert into Student values ('{name}', '{department}', '{clas}');";
                databaseControler.doSqlCommand(commandText);
                this.GridView1.DataBind();
            }
        }
        // delete;
        protected void Button2_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox1.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                String commandText = $"delete from Student where studentId = {id};";
                databaseControler.doSqlCommand(commandText);
                this.GridView1.DataBind();
            }
        }
        // change;
        protected void Button3_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox1.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                string name = this.TextBox2.Text.Trim();
                string department = this.TextBox3.Text.Trim();
                string clas = this.TextBox4.Text.Trim();
                if (name != "") {
                    string commandText = $"update Student set studentName = '{name}' where studentId = {id};";
                    databaseControler.doSqlCommand(commandText);
                }
                if (department != "") {
                    string commandText = $"update Student set studentDepartment = '{department}' where studentId = {id};";
                    databaseControler.doSqlCommand(commandText);
                }
                if (clas != "") {
                    string commandText = $"update Student set studentClass = '{clas}' where studentId = {id};";
                    databaseControler.doSqlCommand(commandText);
                }
                this.GridView1.DataBind();
            }
        }
        // search;
        protected void Button4_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox1.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            string name = this.TextBox2.Text.Trim();
            string department = this.TextBox3.Text.Trim();
            string clas = this.TextBox4.Text.Trim();
            if (id != 0 || name != "" || department != "" || clas != "") {
                string idCommandText = id == 0 ? "" : $"studentId = {id}";
                string nameCommandText = name == "" ? "" : $"studentName = '{name}'";
                string departmentCommandText = department == "" ? "" : $"studentDepartment = '{department}'";
                string clasCommandText = clas == "" ? "" : $"studentClass = '{clas}'";
                string firstAnd = idCommandText == "" || (nameCommandText == "" && departmentCommandText == "" && clasCommandText == "")? "" : "and";
                string secondAnd = nameCommandText == "" || (departmentCommandText == "" && clasCommandText == "") ? "" : "and";
                string thirdAnd = departmentCommandText == "" || clasCommandText == "" ? "" : "and";
                string commandText = $"select * from Student where {idCommandText} {firstAnd} {nameCommandText} {secondAnd} {departmentCommandText} {thirdAnd} {clasCommandText};";
                this.student_table.SelectCommand = commandText;
                this.GridView1.DataBind();
            }
        }
        #endregion
        // teacher;
        #region
        // add;
        protected void Button5_Click(object sender, EventArgs e)
        {
            string name = this.TextBox6.Text.Trim();
            string department = this.TextBox7.Text.Trim();
            if (name != "" && department != "") {
                DatebaseControler databaseControler = new DatebaseControler();
                string commandText = $"insert into Teacher values ('{name}', '{department}');";
                databaseControler.doSqlCommand(commandText);
                this.GridView2.DataBind();
            }
        }
        // delete;
        protected void Button6_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox5.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                String commandText = $"delete from Teacher where teacherId = {id};";
                databaseControler.doSqlCommand(commandText);
                this.GridView2.DataBind();
            }
        }
        // change;
        protected void Button7_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox5.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                string name = this.TextBox6.Text.Trim();
                string department = this.TextBox7.Text.Trim();
                if (name != "") {
                    string commandText = $"update Teacher set teacherName = '{name}' where teacherId = {id}";
                    databaseControler.doSqlCommand(commandText);
                }
                if (department != "") {
                    string commandText = $"update Teacher set teacherDepartment = '{department}' where teacherId = {id};";
                    databaseControler.doSqlCommand(commandText);
                }
                this.GridView2.DataBind(); 
            }
        }
        // search;
        protected void Button8_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox5.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            string name = this.TextBox6.Text.Trim();
            string department = this.TextBox7.Text.Trim();
            if (id != 0 || name != "" || department != "") {
                string idCommandText = id == 0 ? "" : $"teacherId = {id}";
                string nameCommandText = name == "" ? "" : $"teacherName = '{name}'";
                string departmentCommandText = department == "" ? "" : $"teacherDepartment = '{department}'";
                string firstAnd = idCommandText == "" || (nameCommandText == "" && departmentCommandText == "") ? "" : "and";
                string secondAnd = nameCommandText == "" || departmentCommandText == "" ? "" : "and";
                string commandText = $"select * from Teacher where {idCommandText} {firstAnd} {nameCommandText} {secondAnd} {departmentCommandText};";
                this.teacher_table.SelectCommand = commandText;
                this.GridView2.DataBind();
            }
        }
        #endregion
        // course;
        #region
        // add;
        protected void Button9_Click(object sender, EventArgs e)
        {
            string name = this.TextBox9.Text.Trim();            // 课程名称;
            string teacherIdString = this.TextBox10.Text.Trim(); // 教师id;
            int teacherId = teacherIdString == "" ? 0 : Convert.ToInt32(teacherIdString);
            string day = this.TextBox11.Text.Trim();            // 上课日期(星期x);
            string time = this.TextBox12.Text.Trim();           // 上课时间(第x节课);
            int num = 0;                                        // 新建课程时的学生人数;
            if (name != "" && teacherId != 0 && day != "" && time != "") {
                DatebaseControler databaseControler = new DatebaseControler();
                string deltaTeacherIdCommandText = $"select * from Teacher where teacherId = {teacherId}";
                // 判断 Teacher 中有无该 teacherId;
                if (databaseControler.findRecode(deltaTeacherIdCommandText)) {
                    string commandText = $"insert into Course values ('{name}', {teacherId}, '{day}', '{time}', {num});";
                    databaseControler.doSqlCommand(commandText);
                    this.GridView3.DataBind();
                } else {
                    Response.Write("<script>window.alert(\"咱学校没有这个老师!!!\")</script>");
                }
            }
        }
        // delete;
        protected void Button10_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox8.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                String commandText = $"delete from Course where courseId = {id};";
                databaseControler.doSqlCommand(commandText);
                this.GridView3.DataBind();
            }
        }
        // change;
        protected void Button11_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox8.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                string name = this.TextBox9.Text.Trim();
                string teacherIdString = this.TextBox10.Text.Trim();
                int teacherId = teacherIdString == "" ? 0 : Convert.ToInt32(teacherIdString);
                string day = this.TextBox11.Text.Trim();
                string time = this.TextBox12.Text.Trim();
                // 小问题: 如果更改 course 的信息时, teacher id 输入错误的话, 是否应该继续修改该 course 的其他属性呢?
                if (teacherId != 0) {
                    string deltaTeacherIdCommandText = $"select * from Teacher where teacherId = {teacherId}";
                    if (!databaseControler.findRecode(deltaTeacherIdCommandText)) {
                        // 此时用户输入中含有 teacherId 且该 teacherId 不在 Teacher中;
                        Response.Write("<script>window.alert(\"咱学校没这个老师!!!\");</script>");
                        return;
                    }
                }
                if (name != "") {
                    string commandText = $"update Course set courseName = '{name}' where courseId = {id};";
                    databaseControler.doSqlCommand(commandText);
                }
                if (teacherId != 0) {
                    string commandText = $"update Course set teacherId = {teacherId} where courseId = {id};";
                    databaseControler.doSqlCommand(commandText);
                }
                if (day != "") {
                    string commandText = $"update Course set courseDay = '{day}' where courseId = {id}";
                    databaseControler.doSqlCommand(commandText);
                }
                if (time != "") {
                    string commandText = $"update Course set courseTime = '{time}' where courseId = {id}";
                    databaseControler.doSqlCommand(commandText);
                }
                this.GridView3.DataBind();
            }
        }
        // search;
        protected void Button12_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox8.Text.Trim();
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            string name = this.TextBox9.Text.Trim();
            string teacherIdString = this.TextBox10.Text.Trim();
            int teacherId = teacherIdString == "" ? 0 : Convert.ToInt32(teacherIdString);
            string day = this.TextBox11.Text.Trim();
            string time = this.TextBox12.Text.Trim();
            string numString = this.TextBox13.Text.Trim();
            int num = numString == "" ? -1 : Convert.ToInt32(numString);
            if (id != 0 || name != "" || teacherId != 0 || day != "" || time != "" || num != -1) {
                string idCommandText = id == 0 ? "" : $"courseId = {id}";
                string nameCommandText = name == "" ? "" : $"courseName = '{name}'";
                string teacherIdCommandText = teacherId == 0 ? "" : $"teacherId = {teacherId}";
                string dayCommandText = day == "" ? "" : $"courseDay = '{day}'";
                string timeCommandText = time == "" ? "" : $"courseTime = '{time}'";
                string numCommandText = num == -1 ? "" : $"studentNum = {num}";
                string firstAnd = idCommandText == "" || (nameCommandText == "" && teacherIdCommandText == "" && dayCommandText == "" && timeCommandText == "" && numCommandText == "") ? "" : "and";
                string secondAnd = nameCommandText == "" || (teacherIdCommandText == "" && dayCommandText == "" && timeCommandText == "" && numCommandText == "") ? "" : "and";
                string thirdAnd = teacherIdCommandText == "" || (dayCommandText == "" && timeCommandText == "" && numCommandText == "") ? "" : "and";
                string fourthAnd = dayCommandText == "" || (timeCommandText == "" && numCommandText == "") ? "" : "and";
                string fifthAnd = timeCommandText == "" || numCommandText == "" ? "" : "and";
                string commandText = $"select * from Course where {idCommandText} {firstAnd} {nameCommandText} {secondAnd} {teacherIdCommandText} {thirdAnd} {dayCommandText} {fourthAnd} {timeCommandText} {fifthAnd} {numCommandText};";
                this.course_table.SelectCommand = commandText;
                this.GridView3.DataBind();
            }
        }
        #endregion
        // grade;
        #region
        // add;
        protected void Button13_Click(object sender, EventArgs e)
        {
            string studentIdString = this.TextBox14.Text.Trim();
            int studentId = studentIdString == "" ? 0 : Convert.ToInt32(studentIdString);
            string courseIdString = this.TextBox15.Text.Trim();
            int courseId = courseIdString == "" ? 0 : Convert.ToInt32(courseIdString);
            string gradeString = this.TextBox16.Text.Trim();
            int grade = gradeString == "" ? -1 : Convert.ToInt32(gradeString);
            if (studentId != 0 && courseId != 0 && grade != -1) {
                DatebaseControler databaseControler = new DatebaseControler();
                // 判断是否有这个学生;
                string deltaStudentIdCommandText = $"select * from Student where studentId = {studentId};";
                // 判断是否有这个课程;
                string deltaCourseIdCommandText = $"select * from Course where courseId = {courseId};";
                if (databaseControler.findRecode(deltaStudentIdCommandText) && databaseControler.findRecode(deltaCourseIdCommandText) && grade >= 0 && grade <= 100) {
                    string commandText = $"insert into Grade values ({studentId}, {courseId}, {grade});";
                    databaseControler.doSqlCommand(commandText);
                    this.GridView4.DataBind();
                } else {
                    Response.Write("<script>window.alert(\"请检查输入!!!\");</script>");
                }
            }
        }
        // delete;
        protected void Button14_Click(object sender, EventArgs e)
        {
            string studentIdString = this.TextBox14.Text.Trim();
            int studentId = studentIdString == "" ? 0 : Convert.ToInt32(studentIdString);
            string courseIdString = this.TextBox15.Text.Trim();
            int courseId = courseIdString == "" ? 0 : Convert.ToInt32(courseIdString);
            if (studentId != 0 && courseId != 0) {
                DatebaseControler databaseControler = new DatebaseControler();
                string commandText = $"delete from Grade where studentId = {studentId} and courseId = {courseId}";
                databaseControler.doSqlCommand(commandText);
                this.GridView4.DataBind();
            }
        }
        // change;
        // 只允许通过 student id & course id 更新 grade;
        protected void Button15_Click(object sender, EventArgs e)
        {
            string studentIdString = this.TextBox14.Text.Trim();
            int studentId = studentIdString == "" ? 0 : Convert.ToInt32(studentIdString);
            string courseIdString = this.TextBox15.Text.Trim();
            int courseId = courseIdString == "" ? 0 : Convert.ToInt32(courseIdString);
            string gradeString = this.TextBox16.Text.Trim();
            int grade = gradeString == "" ? -1 : Convert.ToInt32(gradeString);
            if (studentId != 0 && courseId != 0 && grade != -1) {
                DatebaseControler databaseControler = new DatebaseControler();
                string commandText = $"update Grade set grade = {grade} where studentId = {studentId} and courseId = {courseId}";
                databaseControler.doSqlCommand(commandText);
                this.GridView4.DataBind();
            }
        }
        // search;
        protected void Button16_Click(object sender, EventArgs e)
        {
            string studentIdString = this.TextBox14.Text.Trim();
            int studentId = studentIdString == "" ? 0 : Convert.ToInt32(studentIdString);
            string courseIdString = this.TextBox15.Text.Trim();
            int courseId = courseIdString == "" ? 0 : Convert.ToInt32(courseIdString);
            string gradeString = this.TextBox16.Text.Trim();
            int grade = gradeString == "" ? -1 : Convert.ToInt32(gradeString);
            if (studentId != 0 || courseId != 0 || grade != -1) {
                string studentIdCommandText = studentId == 0 ? "" : $"studentId = {studentId}";
                string courseIdCommandText = courseId == 0 ? "" : $"courseId = {courseId}";
                string gradeCommandText = grade == -1 ? "" : $"grade = {grade}";
                string firstAnd = studentIdCommandText == "" || (courseIdCommandText == "" && gradeCommandText == "") ? "" : "and";
                string secondAnd = courseIdCommandText == "" || gradeCommandText == "" ? "" : "and";
                string commandText = $"select * from GreatView where {studentIdCommandText} {firstAnd} {courseIdCommandText} {secondAnd} {gradeCommandText}";
                this.greate_view.SelectCommand = commandText;
                this.GridView4.DataBind();
            }
        }
        #endregion
        #endregion
    }
}
