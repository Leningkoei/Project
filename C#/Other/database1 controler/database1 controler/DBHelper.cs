using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace database1_controler
{
    public class DBHelper
    {
        private SqlCommand command;
        private SqlConnection connection;
        private string connectionString;
        public DBHelper(string command) {
            this.command = new SqlCommand();
            this.connection = new SqlConnection();
            this.connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=database 1;Integrated Security=SSPI;";
            this.ConnectionDataBase();
            this.DoSqlCommand(command);
            this.CloseConnection();
        }
        //      关闭数据库连接;
        public void CloseConnection() {
            this.connection.Close();
        }
        //      连接数据库;
        public void ConnectionDataBase() {
            //      指定连接;
            this.connection.ConnectionString = this.connectionString;
            //      如果该连接是未连接的;
            if (this.connection.State == System.Data.ConnectionState.Closed) {
                //      打开连接;
                this.connection.Open();
            }
            //      将命令的连接指定为该连接;
            this.command.Connection = this.connection;
        }
        //      执行sql语句;
        public void DoSqlCommand(string commandText) {
            //      接收要执行的命令;
            this.command.CommandText = commandText;
            //      执行;
            this.command.ExecuteNonQuery();
        }
    }
}