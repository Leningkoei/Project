using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace finger_guess_game
{
    public partial class Form1 : Form
    {
        private string playerAction;
        private string computerAction;
        public Form1()
        {
            InitializeComponent();
            this.playerAction = "0";
            this.computerAction = "0";
        }
        //      石头;
        private void button1_Click(object sender, EventArgs e)
        {
            this.playerAction = "1";
            this.label1.Text = "用户: 石头";
            this.getComputerAction();
            this.getResult();
        }
        //      剪刀;
        private void button2_Click(object sender, EventArgs e)
        {
            this.playerAction = "2";
            this.label1.Text = "用户: 剪刀";
            this.getComputerAction();
            this.getResult();
        }
        //      布;
        private void button3_Click(object sender, EventArgs e)
        {
            this.playerAction = "3";
            this.label1.Text = "用户: 布";
            this.getComputerAction();
            this.getResult();
        }
        //      电脑行动;
        private void getComputerAction() {
            Random random = new Random();
            this.computerAction = random.Next(1, 4).ToString();
            if (this.computerAction == "1") {
                this.label2.Text = "电脑: 石头";
            }
            else if (this.computerAction == "2") {
                this.label2.Text = "电脑: 剪刀";
            }
            else if (this.computerAction == "3") {
                this.label2.Text = "电脑: 布";
            }
            else {
                return;
            }
        }
        //      比较得到最终结果;
        private void getResult() {
            if (this.playerAction == this.computerAction) {
                this.label3.Text = "用户平了";
            }
            else if (this.playerAction == "1") {
                if (this.computerAction == "2") {
                    this.label3.Text = "用户赢了";
                }
                else if (this.computerAction == "3") {
                    this.label3.Text = "用户输了";
                }
                else {
                    return;
                }
            }
            else if (this.playerAction == "2") {
                if (this.computerAction == "1") {
                    this.label3.Text = "用户输了";
                }
                else if (this.computerAction == "3") {
                    this.label3.Text = "用户赢了";
                }
                else {
                    return;
                }
            }
            else if (this.playerAction == "3") {
                if (this.computerAction == "1") {
                    this.label3.Text = "用户赢了";
                }
                else if (this.computerAction == "2") {
                    this.label3.Text = "用户输了";
                }
                else {
                    return;
                }
            }
            else {
                return;
            }
        }
    }
}
