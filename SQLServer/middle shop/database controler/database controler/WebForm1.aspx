<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="database_controler.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>中间商赚差价</title>
    <link href="StyleSheet1.css" type="text/css" rel="stylesheet" />
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <label>日期</label>
            <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <asp:Button ID="Button1" runat="server" Text="删库跑路" OnClick="Button1_Click" />
        </div>
        <div class="content">
            <!--进库部分-->
            <div>
                <!--进库录入-->
                <div>
                    <p>
                        <asp:Button ID="Button2" runat="server" Text="进库" OnClick="Button2_Click" /></p>
                    <p>
                        <label>代销处ID</label>
                        <asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>代销处名称</label>
                        <asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品ID</label>
                        <asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品名称</label>
                        <asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品入库数量</label>
                        <asp:TextBox ID="TextBox6" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品进价单价</label>
                        <asp:TextBox ID="TextBox7" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品进价总价</label>
                        <asp:TextBox ID="TextBox8" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商户ID</label>
                        <asp:TextBox ID="TextBox9" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商户名称</label>
                        <asp:TextBox ID="TextBox10" runat="server"></asp:TextBox>
                    </p>
                </div>
                <!--date内进库商品输出-->
                <div>
                    <p><label><%=Date%>内进库商品</label></p>
                    <p>
                        <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1">
                            <Columns>
                                <asp:BoundField DataField="MiddleShopID" HeaderText="代销处ID" SortExpression="MiddleShopID" />
                                <asp:BoundField DataField="MiddleShopName" HeaderText="代销处名称" SortExpression="MiddleShopName" />
                                <asp:BoundField DataField="ItemID" HeaderText="商品ID" SortExpression="ItemID" />
                                <asp:BoundField DataField="ItemName" HeaderText="商品名称" SortExpression="ItemName" />
                                <asp:BoundField DataField="ItemNum" HeaderText="商品进库数量" SortExpression="ItemNum" />
                                <asp:BoundField DataField="ItemPrice" HeaderText="商品进库单价" SortExpression="ItemPrice" />
                                <asp:BoundField DataField="SumPrice" HeaderText="商品进库总价" SortExpression="SumPrice" />
                                <asp:BoundField DataField="FromShopID" HeaderText="商户ID" SortExpression="FromShopID" />
                                <asp:BoundField DataField="FromShopName" HeaderText="商户名称" SortExpression="FromShopName" />
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:middle shopConnectionString %>" SelectCommand="SELECT [MiddleShopID], [MiddleShopName], [ItemID], [ItemName], [ItemNum], [ItemPrice], [SumPrice], [FromShopID], [FromShopName] FROM [InputItem]">
                        </asp:SqlDataSource>
                    </p>
                </div>
                <!--操作商户表-->
                <div>
                    <p>
                        <label>商户</label>
                        &nbsp;&nbsp;
                        <asp:Button ID="Button6" runat="server" Text="查询" OnClick="Button6_Click" />
                        &nbsp;&nbsp;
                        <asp:Button ID="Button7" runat="server" Text="代销处查询" OnClick="Button7_Click" />
                        &nbsp;&nbsp;
                        <asp:Button ID="Button8" runat="server" Text="补全/更改信息" OnClick="Button8_Click" />
                        &nbsp;&nbsp;
                        <asp:Button ID="Button9" runat="server" Text="查看全部" OnClick="Button9_Click" />
                    </p>
                    <p>
                        <label>商户ID</label>
                        <asp:TextBox ID="TextBox21" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商户名称</label>
                        <asp:TextBox ID="TextBox22" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>联系电话</label>
                        <asp:TextBox ID="TextBox23" runat="server"></asp:TextBox>
                    </p>
                    <!--
                    <p>
                        <label>地址</label>
                        <asp:TextBox ID="TextBox24" runat="server"></asp:TextBox>
                    </p>
                    -->
                    <p>
                        <label>代销处ID</label>
                        <asp:TextBox ID="TextBox25" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>代销处名称</label>
                        <asp:TextBox ID="TextBox26" runat="server"></asp:TextBox>
                    </p>
                </div>
                <!--输出商户表-->
                <div>
                    <p>
                        <asp:GridView ID="GridView4" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="SqlDataSource4">
                            <Columns>
                                <asp:BoundField DataField="ID" HeaderText="ID" ReadOnly="True" SortExpression="ID" />
                                <asp:BoundField DataField="Name" HeaderText="名称" SortExpression="Name" />
                                <asp:BoundField DataField="Telephone" HeaderText="电话" SortExpression="Telephone" />
                                <asp:BoundField DataField="MiddleShopID" HeaderText="代销处ID" SortExpression="MiddleShopID" />
                                <asp:BoundField DataField="MiddleShopName" HeaderText="代销处名称" SortExpression="MiddleShopName" />
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="SqlDataSource4" runat="server" ConnectionString="<%$ ConnectionStrings:middle shopConnectionString %>" SelectCommand="SELECT * FROM [FromShopInfor]"></asp:SqlDataSource>
                    </p>
                </div>
            </div>
            <!--库存部分-->
            <div>
                <!--通过商品名称查询商品数量-->
                <div>
                    <p>
                        <label>商品名称</label>
                        <asp:TextBox ID="TextBox11" runat="server"></asp:TextBox>
                        &nbsp;&nbsp;
                        <asp:Button ID="Button4" runat="server" Text="查询" OnClick="Button4_Click" />
                        &nbsp;&nbsp;
                        <asp:Button ID="Button5" runat="server" Text="查看全部" OnClick="Button5_Click" />
                    </p>
                </div>
                <!--库存输出-->
                <div>
                    <p><label>库存</label></p>
                    <p>
                        <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" DataKeyNames="ItemID" DataSourceID="SqlDataSource2">
                            <Columns>
                                <asp:BoundField DataField="ItemID" HeaderText="商品ID" ReadOnly="True" SortExpression="ItemID" />
                                <asp:BoundField DataField="ItemName" HeaderText="商品名称" SortExpression="ItemName" />
                                <asp:BoundField DataField="ItemNum" HeaderText="商品数量" SortExpression="ItemNum" />
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:middle shopConnectionString %>" SelectCommand="SELECT * FROM [MiddleShopItem]"></asp:SqlDataSource>
                    </p>
                </div>
            </div>
            <!--出库部分-->
            <div>
                <!--出库录入-->
                <div>
                    <p>
                        <asp:Button ID="Button3" runat="server" Text="出库" OnClick="Button3_Click" /></p>
                    <p>
                        <label>代销处ID</label>
                        <asp:TextBox ID="TextBox12" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>代销处名称</label>
                        <asp:TextBox ID="TextBox13" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品ID</label>
                        <asp:TextBox ID="TextBox14" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品名称</label>
                        <asp:TextBox ID="TextBox15" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品出库数量</label>
                        <asp:TextBox ID="TextBox16" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品出价单价</label>
                        <asp:TextBox ID="TextBox17" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>商品出价总价</label>
                        <asp:TextBox ID="TextBox18" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>客户ID</label>
                        <asp:TextBox ID="TextBox19" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>客户名称</label>
                        <asp:TextBox ID="TextBox20" runat="server"></asp:TextBox>
                    </p>
                </div>
                <!--date日出库商品输出-->
                <div>
                    <p><label><%=Date%>内出库商品</label></p>
                    <p>
                        <asp:GridView ID="GridView3" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource3">
                            <Columns>
                                <asp:BoundField DataField="MiddleShopID" HeaderText="代销处ID" SortExpression="MiddleShopID" />
                                <asp:BoundField DataField="MiddleShopName" HeaderText="代销处名称" SortExpression="MiddleShopName" />
                                <asp:BoundField DataField="ItemID" HeaderText="商品ID" SortExpression="ItemID" />
                                <asp:BoundField DataField="ItemName" HeaderText="商品名称" SortExpression="ItemName" />
                                <asp:BoundField DataField="ItemNum" HeaderText="商品出库数量" SortExpression="ItemNum" />
                                <asp:BoundField DataField="ItemPrice" HeaderText="商品出库单价" SortExpression="ItemPrice" />
                                <asp:BoundField DataField="SumPrice" HeaderText="商品出库总价" SortExpression="SumPrice" />
                                <asp:BoundField DataField="ToShopID" HeaderText="客户ID" SortExpression="ToShopID" />
                                <asp:BoundField DataField="ToShopName" HeaderText="客户名称" SortExpression="ToShopName" />
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="SqlDataSource3" runat="server" ConnectionString="<%$ ConnectionStrings:middle shopConnectionString %>" SelectCommand="SELECT [MiddleShopID], [MiddleShopName], [ItemID], [ItemName], [ItemNum], [ItemPrice], [SumPrice], [ToShopID], [ToShopName] FROM [OutputItem]"></asp:SqlDataSource>
                    </p>
                </div>
                <!--通过客户ID操作客户表-->
                <div>
                    <p><label>客户</label></p>
                    <p>
                        <label>客户ID</label>
                        <asp:TextBox ID="TextBox27" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>客户名称</label>
                        <asp:TextBox ID="TextBox28" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>联系电话</label>
                        <asp:TextBox ID="TextBox29" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>地址</label>
                        <asp:TextBox ID="TextBox30" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>代销处ID</label>
                        <asp:TextBox ID="TextBox31" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>代销处名称</label>
                        <asp:TextBox ID="TextBox32" runat="server"></asp:TextBox>
                    </p>
                </div>
                <!--输出客户表-->
                <div>
                    <p>
                        <asp:GridView ID="GridView5" runat="server" AutoGenerateColumns="False" DataKeyNames="ID" DataSourceID="SqlDataSource5">
                            <Columns>
                                <asp:BoundField DataField="ID" HeaderText="ID" ReadOnly="True" SortExpression="ID" />
                                <asp:BoundField DataField="Name" HeaderText="名称" SortExpression="Name" />
                                <asp:BoundField DataField="Telephone" HeaderText="电话" SortExpression="Telephone" />
                                <asp:BoundField DataField="MiddleShopID" HeaderText="代销处ID" SortExpression="MiddleShopID" />
                                <asp:BoundField DataField="MiddleShopName" HeaderText="代销处名称" SortExpression="MiddleShopName" />
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="SqlDataSource5" runat="server" ConnectionString="<%$ ConnectionStrings:middle shopConnectionString %>" SelectCommand="SELECT * FROM [ToShopInfor]"></asp:SqlDataSource>
                    </p>
                </div>
            </div>
            <!--代销处部分-->
            <div>
                <!--代销处操作-->
                <div>
                    <p><label>代销处</label></p>
                    <p>
                        <label>ID</label>
                        <asp:TextBox ID="TextBox33" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>名称</label>
                        <asp:TextBox ID="TextBox34" runat="server"></asp:TextBox>
                    </p>
                    <p>
                        <label>电话</label>
                        <asp:TextBox ID="TextBox35" runat="server"></asp:TextBox>
                    </p>
                </div>
                <!--代销处输出-->
                <div>
                    <p>
                        <asp:GridView ID="GridView6" runat="server" AutoGenerateColumns="False" DataKeyNames="Id" DataSourceID="SqlDataSource6">
                            <Columns>
                                <asp:BoundField DataField="Id" HeaderText="Id" ReadOnly="True" SortExpression="Id" />
                                <asp:BoundField DataField="Manager" HeaderText="名称" SortExpression="Manager" />
                                <asp:BoundField DataField="telephone" HeaderText="电话" SortExpression="telephone" />
                            </Columns>
                        </asp:GridView>
                        <asp:SqlDataSource ID="SqlDataSource6" runat="server" ConnectionString="<%$ ConnectionStrings:middle shopConnectionString %>" SelectCommand="SELECT * FROM [MiddleShopInfor]"></asp:SqlDataSource>
                    </p>
                </div>
            </div>
        </div>
    </form>
</body>
</html>
