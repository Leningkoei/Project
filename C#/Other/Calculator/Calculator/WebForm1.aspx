<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="Calculator.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
        </div>
        <div>
            <asp:Button ID="Button1" runat="server" Text="1" OnClick="Button1_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button2" runat="server" Text="2" OnClick="Button2_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button3" runat="server" Text="3" OnClick="Button3_Click" />
            <br />
            <asp:Button ID="Button4" runat="server" Text="4" OnClick="Button4_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button5" runat="server" Text="5" OnClick="Button5_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button6" runat="server" Text="6" OnClick="Button6_Click" />
            <br />
            <asp:Button ID="Button7" runat="server" Text="7" OnClick="Button7_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button8" runat="server" Text="8" OnClick="Button8_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button9" runat="server" Text="9" OnClick="Button9_Click" />
            <br />
            <asp:Button ID="Button10" runat="server" Text="0" OnClick="Button10_Click" />
            <br />
            <asp:Button ID="Button11" runat="server" Text="+" OnClick="Button11_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button12" runat="server" Text="-" OnClick="Button12_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button13" runat="server" Text="*" OnClick="Button13_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button14" runat="server" Text="/" OnClick="Button14_Click" />
            &nbsp;&nbsp;
            <asp:Button ID="Button15" runat="server" Text="=" OnClick="Button15_Click" />
        </div>
        <div>
            <asp:TextBox ID="TextBox2" runat="server" Text ="null"></asp:TextBox>
            <asp:TextBox ID="TextBox3" runat="server" Text ="null"></asp:TextBox>
            <asp:TextBox ID="TextBox4" runat="server" Text ="null"></asp:TextBox>
            <asp:TextBox ID="TextBox5" runat="server" Text ="null"></asp:TextBox>
            <asp:TextBox ID="TextBox6" runat="server" Text ="null"></asp:TextBox>
            <asp:TextBox ID="TextBox7" runat="server" Text ="null"></asp:TextBox>
        </div>
    </form>
</body>
</html>
