using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

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
        //      执行增删改查语句;
        public int DoSqlCommand(string commandText) {
            int rowNum;
            this.ConnectionDataBase();
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
            this.ConnectionDataBase();
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
            this.ConnectionDataBase();
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
        //      关闭数据库连接;
        private void CloseConnection() {
            this.connection.Close();
        }
        //      创建数据库连接;
        private void ConnectionDataBase() {
            this.connection.ConnectionString = this.connectionString;
            if (this.connection.State == System.Data.ConnectionState.Closed) {
                this.connection.Open();
            }
            this.command.Connection = this.connection;
        }
    }
}