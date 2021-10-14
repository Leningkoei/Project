<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="EducationalAdministrationPage.aspx.cs" Inherits="WebApplication1.EducationalAdministrationPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <!-- student -->
            <div>
                <h2>student</h2>
                <!-- buttons -->
                <div>
                    <asp:Button ID="Button1" runat="server" Text=" a d d" OnClick="Button1_Click" />
                    <asp:Button ID="Button2" runat="server" Text="delete" OnClick="Button2_Click" />
                    <asp:Button ID="Button3" runat="server" Text="change" OnClick="Button3_Click" />
                    <asp:Button ID="Button4" runat="server" Text="search" OnClick="Button4_Click" />
                </div>
                <!-- inputs -->
                <div>
                    <label>id</label><asp:TextBox ID="TextBox1" runat="server"></asp:TextBox><br>
                    <label>name</label><asp:TextBox ID="TextBox2" runat="server"></asp:TextBox><br>
                    <label>department</label><asp:TextBox ID="TextBox3" runat="server"></asp:TextBox><br>
                    <label>class</label><asp:TextBox ID="TextBox4" runat="server"></asp:TextBox><br>
                </div>
                <!-- grid view -->
                <div>
                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataKeyNames="studentId" DataSourceID="student_table">
                        <Columns>
                            <asp:BoundField DataField="studentId" HeaderText="studentId" InsertVisible="False" ReadOnly="True" SortExpression="studentId" />
                            <asp:BoundField DataField="studentName" HeaderText="studentName" SortExpression="studentName" />
                            <asp:BoundField DataField="studentDepartment" HeaderText="studentDepartment" SortExpression="studentDepartment" />
                            <asp:BoundField DataField="studentClass" HeaderText="studentClass" SortExpression="studentClass" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="student_table" runat="server" ConnectionString="<%$ ConnectionStrings:CourseSelectionConnectionString %>" SelectCommand="SELECT * FROM [Student]"></asp:SqlDataSource>
                </div>
            </div>
            <!-- teacher -->
            <div>
                <h2>teacher</h2>
                <!-- buttons -->
                <div>
                    <asp:Button ID="Button5" runat="server" Text=" a d d" OnClick="Button5_Click" />
                    <asp:Button ID="Button6" runat="server" Text="delete" OnClick="Button6_Click" />
                    <asp:Button ID="Button7" runat="server" Text="change" OnClick="Button7_Click" />
                    <asp:Button ID="Button8" runat="server" Text="search" OnClick="Button8_Click" />
                </div>
                <!-- inputs -->
                <div>
                    <label>id</label><asp:TextBox ID="TextBox5" runat="server"></asp:TextBox><br>
                    <label>name</label><asp:TextBox ID="TextBox6" runat="server"></asp:TextBox><br>
                    <label>department</label><asp:TextBox ID="TextBox7" runat="server"></asp:TextBox><br>
                </div>
                <!-- grid view -->
                <div>
                    <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" DataKeyNames="teacherId" DataSourceID="teacher_table">
                        <Columns>
                            <asp:BoundField DataField="teacherId" HeaderText="teacherId" InsertVisible="False" ReadOnly="True" SortExpression="teacherId" />
                            <asp:BoundField DataField="teacherName" HeaderText="teacherName" SortExpression="teacherName" />
                            <asp:BoundField DataField="teacherDepartment" HeaderText="teacherDepartment" SortExpression="teacherDepartment" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="teacher_table" runat="server" ConnectionString="<%$ ConnectionStrings:CourseSelectionConnectionString %>" SelectCommand="SELECT * FROM [Teacher]"></asp:SqlDataSource>
                </div>
            </div>
            <!-- course -->
            <div>
                <h2>course</h2>
                <!-- buttons -->
                <div>
                    <asp:Button ID="Button9" runat="server" Text=" a d d" OnClick="Button9_Click" />
                    <asp:Button ID="Button10" runat="server" Text="delete" OnClick="Button10_Click" />
                    <asp:Button ID="Button11" runat="server" Text="change" OnClick="Button11_Click" />
                    <asp:Button ID="Button12" runat="server" Text="search" OnClick="Button12_Click" />
                </div>
                <!-- inputs -->
                <div>
                    <label>id</label><asp:TextBox ID="TextBox8" runat="server"></asp:TextBox><br>
                    <label>name</label><asp:TextBox ID="TextBox9" runat="server"></asp:TextBox><br>
                    <label>teacher id</label><asp:TextBox ID="TextBox10" runat="server"></asp:TextBox><br>
                    <label>day</label><asp:TextBox ID="TextBox11" runat="server"></asp:TextBox><br>
                    <label>time</label><asp:TextBox ID="TextBox12" runat="server"></asp:TextBox><br>
                    <label>num</label><asp:TextBox ID="TextBox13" runat="server"></asp:TextBox><br>
                </div>
                <!-- grid view -->
                <div>
                    <asp:GridView ID="GridView3" runat="server" AutoGenerateColumns="False" DataKeyNames="courseId" DataSourceID="course_table">
                        <Columns>
                            <asp:BoundField DataField="courseId" HeaderText="courseId" InsertVisible="False" ReadOnly="True" SortExpression="courseId" />
                            <asp:BoundField DataField="courseName" HeaderText="courseName" SortExpression="courseName" />
                            <asp:BoundField DataField="teacherId" HeaderText="teacherId" SortExpression="teacherId" />
                            <asp:BoundField DataField="courseDay" HeaderText="courseDay" SortExpression="courseDay" />
                            <asp:BoundField DataField="courseTime" HeaderText="courseTime" SortExpression="courseTime" />
                            <asp:BoundField DataField="studentNum" HeaderText="studentNum" SortExpression="studentNum" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="course_table" runat="server" ConnectionString="<%$ ConnectionStrings:CourseSelectionConnectionString %>" SelectCommand="SELECT * FROM [Course]"></asp:SqlDataSource>
                </div>
            </div>
            <!-- grade -->
            <div>
                <h2>grade</h2>
                <!-- buttons -->
                <div>
                    <asp:Button ID="Button13" runat="server" Text=" a d d" OnClick="Button13_Click" />
                    <asp:Button ID="Button14" runat="server" Text="delete" OnClick="Button14_Click" />
                    <asp:Button ID="Button15" runat="server" Text="change" OnClick="Button15_Click" />
                    <asp:Button ID="Button16" runat="server" Text="search" OnClick="Button16_Click" />
                </div>
                <!-- inputs -->
                <div>
                    <label>student id</label><asp:TextBox ID="TextBox14" runat="server"></asp:TextBox><br>
                    <label>course id</label><asp:TextBox ID="TextBox15" runat="server"></asp:TextBox><br>
                    <label>grade</label><asp:TextBox ID="TextBox16" runat="server"></asp:TextBox><br>
                </div>
                <!-- grid view -->
                <div>
                    <asp:GridView ID="GridView4" runat="server" AutoGenerateColumns="False" DataSourceID="grade_table">
                        <Columns>
                            <asp:BoundField DataField="studentId" HeaderText="studentId" SortExpression="studentId" />
                            <asp:BoundField DataField="courseId" HeaderText="courseId" SortExpression="courseId" />
                            <asp:BoundField DataField="grade" HeaderText="grade" SortExpression="grade" />
                        </Columns>
                    </asp:GridView>
                    <asp:SqlDataSource ID="grade_table" runat="server" ConnectionString="<%$ ConnectionStrings:CourseSelectionConnectionString %>" SelectCommand="SELECT * FROM [Grade]"></asp:SqlDataSource>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
