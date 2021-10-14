using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Text;

namespace WebApplication1
{
    public class DatebaseControler
    {
        private SqlCommand command;
        private SqlConnection connection;
        private string connectionString;
        public DatebaseControler() {
            this.command = new SqlCommand();
            this.connection = new SqlConnection();
            this.connectionString = @"Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=CourseSelection;Integrated Security=SSPI;";
        }
        // 创建数据库连接;
        private void connectDatabase() {
            this.connection.ConnectionString = this.connectionString;
            if (this.connection.State == System.Data.ConnectionState.Closed) {
                this.connection.Open();
            }
            this.command.Connection = this.connection;
        }
        // 关闭数据库连接;
        private void closeConnection() {
            this.connection.Close();
        }
        // 执行增删改查语句;
        public void doSqlCommand(string commandText) {
            this.connectDatabase();
            this.command.CommandText = commandText;
            this.command.ExecuteNonQuery();
            this.closeConnection();
        }
    }
}
