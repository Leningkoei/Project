<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="database1_controler.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>nmsl</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <p>
                <label>学号: </label>
                <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            </p>
            <p>
                <label>姓名: </label>
                <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
            </p>
            <p>
                <label>年龄: </label>
                <asp:DropDownList ID="DropDownList1" runat="server"></asp:DropDownList>
            </p>
            <p>
                <label>系: </label>
                <asp:DropDownList ID="DropDownList2" runat="server">
                    <asp:ListItem>KanColle</asp:ListItem>
                    <asp:ListItem>BangDream</asp:ListItem>
                    <asp:ListItem>PCR</asp:ListItem>
                    <asp:ListItem>FGO</asp:ListItem>
                </asp:DropDownList>
            </p>
            <p>
                <label>班级: </label>
                <asp:DropDownList ID="DropDownList3" runat="server">
                    <asp:ListItem>00</asp:ListItem>
                    <asp:ListItem>01</asp:ListItem>
                    <asp:ListItem>02</asp:ListItem>
                </asp:DropDownList>
            </p>
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="增" />
            &nbsp;&nbsp;
            <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="删" />
            &nbsp;&nbsp;
            <asp:Button ID="Button3" runat="server" OnClick="Button3_Click" Text="改" />
            &nbsp;&nbsp;
            <asp:Button ID="Button4" runat="server" OnClick="Button4_Click" Text="查" />
            <asp:GridView ID="GridView1" runat="server" AllowSorting="True" AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="SqlDataSource1">
                <Columns>
                    <asp:BoundField DataField="ID" HeaderText="学号" ReadOnly="True" SortExpression="ID" />
                    <asp:BoundField DataField="Name" HeaderText="姓名" SortExpression="Name" />
                    <asp:BoundField DataField="Age" HeaderText="年龄" SortExpression="Age" />
                    <asp:BoundField DataField="Department" HeaderText="专业" SortExpression="Department" />
                    <asp:BoundField DataField="Class" HeaderText="班级" SortExpression="Class" />
                </Columns>
            </asp:GridView>
            <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:database 1ConnectionString %>" SelectCommand="SELECT * FROM [StudentInfor]"></asp:SqlDataSource>
        </div>
    </form>
</body>
</html>
