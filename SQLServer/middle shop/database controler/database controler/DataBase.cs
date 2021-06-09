using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Text;

namespace database_controler
{
    public class DataBase
    {
        private SqlCommand command;
        private SqlConnection connection;
        private string connectionString;
        public DataBase() {
            this.command = new SqlCommand();
            this.connection = new SqlConnection();
            this.connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=middle shop;Integrated Security=SSPI;";
        }
        //      执行增删改查语句, 返回受影响的行数, 具体返回多少行很诡异;
        public int DoSqlCommand(string commandText) {
            int rowNum;
            this.ConnectDataBase();
            this.command.CommandText = commandText;
            rowNum = this.command.ExecuteNonQuery();
            this.CloseConnection();
            return rowNum;
        }
        /*      返回[key]行中的[column]列的值;
         *      command = "select [column] from [table] where [key] = {0}";
         */
        public int GetValue(string command) {
            int value;
            this.ConnectDataBase();
            this.command.CommandText = command;
            value = Convert.ToInt32(this.command.ExecuteScalar().ToString());
            this.CloseConnection();
            return value;
        }
        /*      判断是否有key == {0}记录, return true == 有;
         *      command = "select X from [table] where [key] = {0}";
         */
        public bool FindRecode(string command) {
            SqlDataReader smjb;
            this.ConnectDataBase();
            this.command.CommandText = command;
            smjb = this.command.ExecuteReader();
            if (smjb.HasRows) {
                this.CloseConnection();
                return true;
            }
            else {
                this.CloseConnection();
                return false;
            }
        }
        /*      导出command所选的数据到.csv中;
         *      type == 0: 用户相关表格;
         *      type == 1: 某天出库表格;
         *      type == 2: 利润表格;
         */
        public void WriteForm(string command, string fileName, int type) {
            SqlDataAdapter ad;
            DataSet ds;
            string path;
            StreamWriter streamWriter;
            this.ConnectDataBase();
            this.command.CommandText = command;
            ad = new SqlDataAdapter(this.command);
            ds = new DataSet();
            ad.Fill(ds);
            this.CloseConnection();
            //      构造输出文件的路径;
            {
                if (type == 0 || type == 2) {
                    path = "./data/" + fileName + ".csv";
                }
                else if (type == 1) {
                    path = "./data/output-item-log/" + fileName + ".csv";
                }
                else {
                    return;
                }
            }
            streamWriter = new StreamWriter(HttpContext.Current.Server
                .MapPath(path), false, Encoding.Default);
            if (ds.Tables[0].Rows.Count > 0) {
                if (type == 0) {
                    streamWriter.WriteLine("ID,名称,电话,代销处ID,代销处名称");
                }
                else if (type == 1) {
                    streamWriter.WriteLine("代销处ID,代销处名称,商品ID,商品名称,商品出库数量,客户ID,客户名称");
                }
                else if (type == 2) {
                    streamWriter.WriteLine("日期,利润,支出,收入");
                }
                foreach (DataRow row in ds.Tables[0].Rows) {
                    StringBuilder str = new StringBuilder();
                    foreach (DataColumn col in ds.Tables[0].Columns) {
                        str.Append(row[col.Caption.ToString()].ToString()
                            + ",");
                    }
                    streamWriter.WriteLine(str.ToString());
                }
            }
            streamWriter.Flush();
            streamWriter.Close();
        }
        //      关闭数据库连接;
        private void CloseConnection() {
            this.connection.Close();
        }
        //      创建数据库连接;
        private void ConnectDataBase() {
            this.connection.ConnectionString = this.connectionString;
            if (this.connection.State == System.Data.ConnectionState.Closed) {
                this.connection.Open();
            }
            this.command.Connection = this.connection;
        }
    }
}