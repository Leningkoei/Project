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
        # region buttons;
        # region student;
        // add;
        protected void Button1_Click(object sender, EventArgs e)
        {
            DatebaseControler databaseControler = new DatebaseControler();
            string name = this.TextBox2.Text.Trim();
            string department = this.TextBox3.Text.Trim();
            string clas = this.TextBox4.Text.Trim();
            if (name != "" && department != "" && clas != "") {
                string commandText = $"insert into Student values ('{name}', '{department}', '{clas}');";
                databaseControler.doSqlCommand(commandText);
                this.GridView1.DataBind();
            }
        }
        // delete;
        protected void Button2_Click(object sender, EventArgs e)
        {
            DatebaseControler databaseControler = new DatebaseControler();
            string idString = this.TextBox1.Text.Trim();
            // int id = Convert.ToInt32(this.TextBox1.Text.Trim());
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                String commandText = $"delete from Student where studentId = {id};";
                databaseControler.doSqlCommand(commandText);
                this.GridView1.DataBind();
            }
        }
        // change;
        protected void Button3_Click(object sender, EventArgs e)
        {
            DatebaseControler databaseControler = new DatebaseControler();
            string idString = this.TextBox1.Text.Trim();
            // int id = Convert.ToInt32(this.TextBox1.Text.Trim());
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            if (id != 0) {
                string name = this.TextBox2.Text.Trim();
                string department = this.TextBox3.Text.Trim();
                string clas = this.TextBox4.Text.Trim();
                if (name != "") {
                    string commandText = $"update Student set studentName = '{name}' where studentId = {id}";
                    databaseControler.doSqlCommand(commandText);
                }
                if (department != "") {
                    string commandText = $"update Student set studentDepartment = '{department}' where studentId = {id}";
                    databaseControler.doSqlCommand(commandText);
                }
                if (clas != "") {
                    string commandText = $"update Student set studentClass = '{clas}' where studentId = {id}";
                    databaseControler.doSqlCommand(commandText);
                }
                this.GridView1.DataBind();
            }
        }
        // search;
        protected void Button4_Click(object sender, EventArgs e)
        {
            string idString = this.TextBox1.Text.Trim();
            // int id = Convert.ToInt32(this.TextBox1.Text.Trim());
            int id = idString == "" ? 0 : Convert.ToInt32(idString);
            string name = this.TextBox2.Text.Trim();
            string department = this.TextBox3.Text.Trim();
            string clas = this.TextBox4.Text.Trim();
            if (id != 0 || name != "" || department != "" || clas != "") {
                string idCommandText = id == 0 ? "" : $"studentId = {id}";
                string nameCommandText = name == "" ? "" : $"studentName = '{name}'";
                string departmentCommandText = department == "" ? "" : $"studentDepartment = '{department}'";
                string clasCommandText = clas == "" ? "" : $"studentClass = '{clas}'";
                string zerothAnd = idCommandText == "" || (nameCommandText == "" && departmentCommandText == "" && clasCommandText == "")? "" : "and";
                string firstAnd = nameCommandText == "" || (departmentCommandText == "" && clasCommandText == "") ? "" : "and";
                string secondAnd = departmentCommandText == "" || clasCommandText == "" ? "" : "and";
                string commandText = $"select * from Student where {idCommandText} {zerothAnd} {nameCommandText} {firstAnd} {departmentCommandText} {secondAnd} {clasCommandText};";
                this.student_table.SelectCommand = commandText;
                this.GridView1.DataBind();
            }
        }
        # endregion;
        # region teacher;
        // add;
        protected void Button5_Click(object sender, EventArgs e)
        {

        }
        // delete;
        protected void Button6_Click(object sender, EventArgs e)
        {

        }
        // change;
        protected void Button7_Click(object sender, EventArgs e)
        {

        }
        // search;
        protected void Button8_Click(object sender, EventArgs e)
        {

        }
        # endregion;
        # region course;
        // add;
        protected void Button9_Click(object sender, EventArgs e)
        {

        }
        // delete;
        protected void Button10_Click(object sender, EventArgs e)
        {

        }
        // change;
        protected void Button11_Click(object sender, EventArgs e)
        {

        }
        // search;
        protected void Button12_Click(object sender, EventArgs e)
        {

        }
        # endregion;
        # region grade;
        // add;
        protected void Button13_Click(object sender, EventArgs e)
        {

        }
        // delete;
        protected void Button14_Click(object sender, EventArgs e)
        {

        }
        // change;
        protected void Button15_Click(object sender, EventArgs e)
        {

        }
        // search;
        protected void Button16_Click(object sender, EventArgs e)
        {

        }
        # endregion;
        # endregion;
    }
}
