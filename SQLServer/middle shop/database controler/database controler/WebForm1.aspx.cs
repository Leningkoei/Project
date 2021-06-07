using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace database_controler
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected string Date;
        public WebForm1() {
            this.Date = "";
        }
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        /*      删库跑路按钮;
         *      初始化本数据库内的7个表并刷新输出;
         *      便于测试;
         */
        protected void Button1_Click(object sender, EventArgs e)
        {
            string command;
            DataBase dataBase;
            int i;
            string[] tableName = new string[7] { "FromShopInfor", "InputItem",
                "MiddleShopInfor", "MiddleShopItem", "OutputItem", "Profit",
                "ToShopInfor" };
            dataBase = new DataBase();
            for (i = 0; i < 7; i++) {
                command = "truncate table {0}";
                command = string.Format(command, tableName[i]);
                dataBase.DoSqlCommand(command);
            }
            this.GridView1.DataBind();
            this.GridView2.DataBind();
            this.GridView3.DataBind();
            this.GridView4.DataBind();
            this.GridView5.DataBind();
        }
        //      进库按钮;
        protected void Button2_Click(object sender, EventArgs e)
        {
            string command;
            DataBase dataBase;
            InputItem item;
            int itemNum;
            //      获取日期;
            this.Date = this.TextBox1.Text.Trim();
            //      新建1个进库商品;
            item = new InputItem();
            //      对这个进库商品赋值;
            {
                item.Date = this.Date;                                   //{0};
                item.MSID = this.TextBox2.Text.Trim();                   //{1};
                item.MSName = this.TextBox3.Text.Trim();                 //{2};
                item.ID = this.TextBox4.Text.Trim();                     //{3};
                item.Name = this.TextBox5.Text.Trim();                   //{4};
                item.Num = Convert.ToInt32(this.TextBox6.Text.Trim());   //{5};
                item.Price = Convert.ToInt32(this.TextBox7.Text.Trim()); //{6};
                item.SumPrice = item.Num * item.Price;                   //{7};
                item.FSID = this.TextBox9.Text.Trim();                   //{8};
                item.FSName = this.TextBox10.Text.Trim();                //{9};
            }
            dataBase = new DataBase();
            //      查询代销处ID是否在代销处总表中;
            {
                command = "select * from MiddleShopInfor where ID = '{0}'";
                command = string.Format(command, item.MSID);
                if (dataBase.FindRecode(command) == false) {
                    return;
                }
            }
            //      将该进库商品添加进进库总表中;
            {
                command = "insert into InputItem values('{0}', '{1}', '{2}',"
                    + "'{3}', '{4}', {5}, {6}, {7}, '{8}', '{9}')";
                command = string.Format(command, item.Date, item.MSID, item
                    .MSName, item.ID, item.Name, item.Num, item.Price, item
                    .SumPrice, item.FSID, item.FSName);
                dataBase.DoSqlCommand(command);
            }
            //      将该进库商品的商户信息添加进商户总表中;
            {
                command = "select * from FromShopInfor where ID = '{0}'";
                command = string.Format(command, item.FSID);
                //      如果该商户不在商户总表中;
                if (dataBase.FindRecode(command) == false) {
                command = "insert into FromShopInfor values('{0}', '{1}')";
                    command = string.Format(command, item.FSID, item.FSName);
                    dataBase.DoSqlCommand(command);
                }
            }
            //      更新库存;
            {
                command = "select ItemNum from MiddleShopItem where ItemID ="
                    + "'{0}'";
                command = string.Format(command, item.ID);
                if (dataBase.FindRecode(command) == false) {
                    command = "insert into MiddleShopItem values('{0}', '{1}',"
                        + "{2})";
                    command = string.Format(command, item.ID, item.Name, item
                        .Num);
                    dataBase.DoSqlCommand(command);
                }
                else {
                    itemNum = dataBase.GetValue(command);
                    itemNum += item.Num;
                    command = "update MiddleShopItem set ItemNum = {1} where "
                        + "ItemID = {0}";
                    command = string.Format(command, item.ID, itemNum);
                    dataBase.DoSqlCommand(command);
                }
            }
            //      更新date内进库商品输出;
            {
                command = "select * from InputItem where InputDate = '{0}'";
                command = string.Format(command, this.Date);
                this.SqlDataSource1.SelectCommand = command;
                this.GridView1.DataBind();
            }
            //      更新库存输出;
            this.GridView2.DataBind();
        }
        //      出库按钮;
        protected void Button3_Click(object sender, EventArgs e)
        {
            string command;
            DataBase dataBase;
            OutputItem item;
            int itemNum;
            int remainItemNum;
            //      获取日期;
            this.Date = this.TextBox1.Text.Trim();
            //      新建1个出库商品;
            item = new OutputItem();
            //      对这个出库商品进行赋值;
            {
                item.Date = this.Date;                                   //{0};
                item.MSID = this.TextBox12.Text.Trim();                  //{1};
                item.MSName = this.TextBox13.Text.Trim();                //{2};
                item.ID = this.TextBox14.Text.Trim();                    //{3};
                item.Name = this.TextBox15.Text.Trim();                  //{4};
                item.Num = Convert.ToInt32(this.TextBox16.Text.Trim());  //{5};
                item.Price = Convert.ToInt32(this.TextBox17.Text.Trim());//{6};
                item.SumPrice = item.Num * item.Price;                   //{7};
                item.TSID = this.TextBox19.Text.Trim();                  //{8};
                item.TSName = this.TextBox20.Text.Trim();                //{9};
            }
            dataBase = new DataBase();
            //      查询代销处ID是否在代销处总表中;
            {
                command = "select ID from MiddleShopInfor where ID = '{0}'";
                command = string.Format(command, item.MSID);
                if (dataBase.FindRecode(command) == false) {
                    return;
                }
            }
            //      查询该出库商品是否在库存中存在;
            command = "select ItemNum from MiddleShopItem where ItemID = {0}";
            command = string.Format(command, item.ID);
            if (dataBase.FindRecode(command) == false) {
                return;
            }
            //      查询该出库商品库存是否足够;
            {
                itemNum = dataBase.GetValue(command);
                remainItemNum = itemNum - item.Num;
                if (remainItemNum < 0) {
                    return;
                }
            }
            //      商品出库;
            {
                //      将该出库商品添加进出库总表中;
                {
                    command = "insert into OutputItem values('{0}', '{1}',"
                        + "'{2}', '{3}', '{4}', {5}, {6}, {7}, '{8}', '{9}')";
                    command = string.Format(command, item.Date, item.MSID, item
                        .MSName, item.ID, item.Name, item.Num, item.Price, item
                        .SumPrice, item.TSID, item.TSName);
                    dataBase.DoSqlCommand(command);
                }
                //      将该出库商品的客户信息添加进客户总表中;
                {
                    command = "select * from ToShopInfor where ID = '{0}'";
                    command = string.Format(command, item.TSID);
                    //      如果该客户不在客户总表中;
                    if (dataBase.FindRecode(command) == false) {
                        command = "insert into ToShopInfor values('{0}', "
                            + "'{1}')";
                        command = string.Format(command, item.TSID, item
                            .TSName);
                        dataBase.DoSqlCommand(command);
                    }
                }
                //      更新库存;
                {
                    command = "update MiddleShopItem set ItemNum = {1} where "
                        + "ItemID = {0}";
                    command = string.Format(command, item.ID, remainItemNum);
                    dataBase.DoSqlCommand(command);
                }
                //      更新date内出库商品输出;
                {
                    command = "select * from OutputItem where OutputDate = "
                        + "'{0}'";
                    command = string.Format(command, this.Date);
                    this.SqlDataSource3.SelectCommand = command;
                    this.GridView3.DataBind();
                }
                //      更新库存输出;
                this.GridView2.DataBind();
            }
        }
        //      通过商品名称查询商品库存的按钮;
        protected void Button4_Click(object sender, EventArgs e)
        {
            string command;
            string itemName;
            //      获取查询商品名称;
            itemName = this.TextBox11.Text.Trim();
            //      更新库存输出;
            {
                command = "select * from MiddleShopItem where ItemName = "
                 + "'{0}'";
                command = string.Format(command, itemName);
                this.SqlDataSource2.SelectCommand = command;
                this.GridView2.DataBind();
            }
        }
        //      查看全部库存的按钮;
        protected void Button5_Click(object sender, EventArgs e)
        {
            this.GridView2.DataBind();
        }
        //      通过商户名称查询商户全部信息的按钮;
        protected void Button6_Click(object sender, EventArgs e)
        {
            string command;
            string fSName;
            //      获取查询商户名称;
            fSName = this.TextBox22.Text.Trim();
            command = "select * from FromShopInfor where Name = '{0}'";
            command = string.Format(command, fSName);
            this.SqlDataSource4.SelectCommand = command;
            this.GridView4.DataBind();
        }
        //      通过代销处名称查询该代销处拉的商户及其全部信息;
        protected void Button7_Click(object sender, EventArgs e)
        {
            string command;
            string mSName;
            //      获取代销处名称;
            mSName = this.TextBox26.Text.Trim();
            command = "select * from FromShopInfor where MiddleShopName = "
                + "'{0}'";
            command = string.Format(command, mSName);
            this.SqlDataSource4.SelectCommand = command;
            this.GridView4.DataBind();
        }
        //      通过商户ID更改商户信息的按钮;
        protected void Button8_Click(object sender, EventArgs e)
        {
            string command;
            DataBase dataBase;
            FromShop shop;
            int i;
            dataBase = new DataBase();
            //      新建1个商户;
            shop = new FromShop();
            //      获取该商户信息;
            {
                shop.ID = this.TextBox21.Text.Trim();
                shop.Name = this.TextBox22.Text.Trim();
                shop.Telephone = this.TextBox23.Text.Trim();
                shop.MiddleShopID = this.TextBox25.Text.Trim();
                shop.MiddleShopName = this.TextBox26.Text.Trim();
            }
            //      通过商户ID更新该商户信息;
            {
                string[] column = new string[4] { "Name", "Telephone",
                    "MiddleShopID", "MiddleShopName" };
                string[] value = new string[4] { shop.Name, shop.Telephone,
                    shop.MiddleShopID, shop.MiddleShopName };
                for (i = 0; i < 4; i++) {
                    command = "update FromShopInfor where set {1} = '{2}' "
                        + "where ID = '{0}'";
                    command = string.Format(command, shop.ID, column[i],
                        value[i]);
                    dataBase.DoSqlCommand(command);
                }
            }
            //      刷新该商户信息;
            {
                command = "select * from FromShopInfor where ID = '{0}'";
                command = string.Format(command, shop.ID);
                this.SqlDataSource4.SelectCommand = command;
                this.GridView4.DataBind();
            }
        }
        //      查看全部商户全部信息;
        protected void Button9_Click(object sender, EventArgs e)
        {
            this.GridView4.DataBind();
        }
    }
}
