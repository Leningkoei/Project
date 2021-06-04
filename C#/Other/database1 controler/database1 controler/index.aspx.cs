using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace database1_controler
{
    public partial class index : System.Web.UI.Page
    {
        private void PrintData(string command) {
            //      指定查询命令;
            SqlDataSource1.SelectCommand = command;
            //      将数据源绑定到GridView上;
            GridView1.DataSourceID = SqlDataSource1.ID;
            //      绑定控件显示结果;
            GridView1.DataBind();
        }
        private void RefreshForm() {
            this.PrintData("select * from StudentInfor");
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            int i;
            ListItem item;
            for (i = 18; i < 24; i++) {
                //      新建1个选项;
                item = new ListItem();
                item.Text = item.Value = i.ToString();
                //      将选项添加进下拉表中;
                DropDownList1.Items.Add(item);
            }
        }
        //      增;
        protected void Button1_Click(object sender, EventArgs e)
        {
            string command;
            DBHelper smjb;
            Student student;
            //      构造需要执行的sql命令;
            {
                //      新建student对象;
                student = new Student();
                //      获取学生数据;
                {
                    student.ID = TextBox1.Text.Trim();
                    student.Name = TextBox2.Text.Trim();
                    student.Age = Convert.ToInt32(DropDownList1.SelectedValue
                        .Trim());
                    student.Department = DropDownList2.SelectedValue.Trim();
                    student.Class = DropDownList3.SelectedValue.Trim();
                }
                //      构造要执行的sql命令;
                command = "insert into StudentInfor values"
                    + "('{0}', '{1}', {2}, '{3}', '{4}')";
                //      向构造好的sql命令中的参数赋值;
                command = string.Format(command, student.ID,student.Name,
                    student.Age, student.Department, student.Class);
            }
            //      执行sql命令;
            smjb = new DBHelper(command);
            //      刷新输出表;
            this.RefreshForm();
        }
        //      删;
        protected void Button2_Click(object sender, EventArgs e)
        {
            string command;
            DBHelper smjb;
            string studentID;
            //      构造要执行的sql命令;
            command = "delete from StudentInfor where ID = '{0}'";
            //      获取将要删除的学生的学号;
            studentID = this.TextBox1.Text.Trim();
            //      向构造好的sql命令中的参数赋值;
            command = string.Format(command, studentID);
            //      执行sql命令;
            smjb = new DBHelper(command);
            //      刷新输出表;
            this.RefreshForm();
        }
        //      改;
        protected void Button3_Click(object sender, EventArgs e)
        {
            string command;
            DBHelper smjb;
            Student student;
            //      构造要执行的sql命令;
            command = "update StudentInfor set Name = '{1}', Age = {2},"
                + "Department = '{3}', Class = '{4}' where ID = '{0}'";
            //      获取更改的学生信息;
            student = new Student();
            student.ID = this.TextBox1.Text.Trim();
            student.Name = this.TextBox2.Text.Trim();
            student.Age = Convert.ToInt32(this.DropDownList1.SelectedValue
                .Trim());
            student.Department = this.DropDownList2.SelectedValue.Trim();
            student.Class = this.DropDownList3.SelectedValue.Trim();
            //      向构造好的sql命令中的参数赋值;
            command = string.Format(command, student.ID, student.Name, student
                .Age, student.Department, student.Class);
            //      执行sql命令;
            smjb = new DBHelper(command);
            //      刷新输出表;
            this.RefreshForm();
        }
        //      查;
        protected void Button4_Click(object sender, EventArgs e)
        {
            string command;
            string studentID;
            //      构造要执行的sql命令;
            command = "select * from StudentInfor where ID = '{0}'";
            //      获取将要查询的学生的学号;
            studentID = this.TextBox1.Text.Trim();
            //      向构造好的sql命令中的参数赋值;
            command = string.Format(command, studentID);
            //      将查询的学生信息输出至输出表;
            this.PrintData(command);
        }
    }
}