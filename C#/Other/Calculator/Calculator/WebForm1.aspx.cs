using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Calculator
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        private string num0;
        private string num1;
        private string num2;
        private string op0;
        private string op1;
        private string op2;

        protected void Page_Load(object sender, EventArgs e)
        {
            this.num0 = this.TextBox2.Text.Trim();
            this.num1 = this.TextBox3.Text.Trim();
            this.num2 = this.TextBox4.Text.Trim();
            this.op0 = this.TextBox5.Text.Trim();
            this.op1 = this.TextBox6.Text.Trim();
        }
        private void getNum(string num) {
            if (this.num0 == "null") {
                this.num0 = num;
                this.TextBox2.Text = this.num0;
            }
            else {
                if (this.op0 == "null") {
                    this.num0 += num;
                    this.TextBox2.Text = this.num0;
                }
                else {
                    if (this.num1 == "null") {
                        this.num1 = num;
                        this.TextBox3.Text = this.num1;
                    }
                    else {
                        if (this.op1 == "null") {
                            this.num1 += num;
                            this.TextBox3.Text = this.num1;
                        }
                        else {
                            if (this.num2 == "null") {
                                this.num2 = num;
                                this.TextBox4.Text = this.num2;
                            }
                            else {
                                this.num2 += num;
                                this.TextBox4.Text = this.num2;
                            }
                        }
                    }
                }
            }
        }
        private void getOp(string op) {
            if (this.op0 == "null") {
                this.op0 = op;
                this.TextBox5.Text = this.op0;
            }
            else {
                if (this.op1 == "null") {
                    this.op1 = op;
                    this.TextBox6.Text = this.op1;
                }
                else {
                    this.op2 = op;
                    this.TextBox7.Text = op;
                }
            }
        }
        private void getTempResult() {
            if (this.op0 == "+") {
                if (this.op1 == "+" || this.op1 == "-") {
                    if (this.op1 == "+") {
                        this.num0 = (Convert.ToInt32(this.num0) + Convert
                            .ToInt32(this.num1)).ToString();
                        this.TextBox2.Text = this.num0;
                        this.TextBox3.Text = this.TextBox4.Text;
                        this.TextBox4.Text = "null";
                        this.TextBox5.Text = this.TextBox6.Text;
                        this.TextBox6.Text = this.TextBox7.Text;
                        this.TextBox7.Text = "null";
                    }
                    else if (this.op1 == "-") {
                        this.num0 = (Convert.ToInt32(this.num0) + Convert
                            .ToInt32(this.num1)).ToString();
                        this.TextBox2.Text = this.num0;
                        this.TextBox3.Text = this.TextBox4.Text;
                        this.TextBox4.Text = "null";
                        this.TextBox5.Text = this.TextBox6.Text;
                        this.TextBox6.Text = this.TextBox7.Text;
                        this.TextBox7.Text = "null";
                    }
                }
                else if (this.op1 == "*" || this.op1 == "/") {
                    if (this.op1 == "*") {
                        this.num1 = (Convert.ToInt32(this.num1) * Convert
                            .ToInt32(this.num2)).ToString();
                        this.TextBox3.Text = this.num1;
                        this.TextBox4.Text = "null";
                        this.TextBox6.Text = this.TextBox7.Text;
                        this.TextBox7.Text = "null";
                    }
                    else if (this.op1 == "/") {
                        this.num1 = (Convert.ToInt32(this.num1) / Convert
                            .ToInt32(this.num2)).ToString();
                        this.TextBox3.Text = this.num1;
                        this.TextBox4.Text = "null";
                        this.TextBox6.Text = this.TextBox7.Text;
                        this.TextBox7.Text = "null";
                    }
                }   
            }
            else if (this.op0 == "-") {
                if (this.op1 == "+" || this.op1 == "-") {
                    this.num0 = (Convert.ToInt32(this.num0) - Convert
                        .ToInt32(this.num1)).ToString();
                    this.TextBox2.Text = this.num0;
                    this.TextBox3.Text = this.TextBox4.Text;
                    this.TextBox4.Text = "null";
                    this.TextBox5.Text = this.TextBox6.Text;
                    this.TextBox6.Text = this.TextBox7.Text;
                    this.TextBox7.Text = "null";
                }
                else if (this.op1 == "*" || this.op1 == "/") {
                    if (this.op1 == "*") {
                        this.num1 = (Convert.ToInt32(this.num1) * Convert
                            .ToInt32(this.num2)).ToString();
                        this.TextBox3.Text = this.num1;
                        this.TextBox4.Text = "null";
                        this.TextBox6.Text = this.TextBox7.Text;
                        this.TextBox7.Text = "null";
                    }
                    else if (this.op1 == "/") {
                        this.num1 = (Convert.ToInt32(this.num1) / Convert
                            .ToInt32(this.num2)).ToString();
                        this.TextBox3.Text = this.num1;
                        this.TextBox4.Text = "null";
                        this.TextBox6.Text = this.TextBox7.Text;
                        this.TextBox7.Text = "null";
                    }
                }   
            }
            else if (this.op0 == "*") {
                this.num0 = (Convert.ToInt32(this.num0) * Convert
                    .ToInt32(this.num1)).ToString();
                this.TextBox2.Text = this.num0;
                this.TextBox3.Text = this.TextBox4.Text;
                this.TextBox4.Text = "null";
                this.TextBox5.Text = this.TextBox6.Text;
                this.TextBox6.Text = this.TextBox7.Text;
                this.TextBox7.Text = "null";
            }
            else if (this.op0 == "/") {
                this.num0 = (Convert.ToInt32(this.num0) / Convert
                    .ToInt32(this.num1)).ToString();
                this.TextBox2.Text = this.num0;
                this.TextBox3.Text = this.TextBox4.Text;
                this.TextBox4.Text = "null";
                this.TextBox5.Text = this.TextBox6.Text;
                this.TextBox6.Text = this.TextBox7.Text;
                this.TextBox7.Text = "null";
            }
            /*
            if (this.op0 == "null") {
                return;
            }
            else {
                if (this.num1 == "null") {
                    return;
                }
            }
            if (this.op0 == "+") {
                if (this.op1 == "+" || this.op1 == "-") {
                    this.num0 = (Convert.ToInt32(this.num0) + Convert
                        .ToInt32(this.num1)).ToString();
                    this.num1 = this.num2;
                    this.TextBox2.Text = this.TextBox3.Text;
                    this.TextBox4.Text = "null";
                    this.op0 = this.op1;
                    this.TextBox5.Text = this.TextBox6.Text;
                    this.TextBox6.Text = "null";
                }
                else {
                    if (this.op1 == "*") {
                        this.num1 = (Convert.ToInt32(this.num1) * Convert
                            .ToInt32(this.num2)).ToString();
                        this.TextBox3.Text = this.num1;
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                    else if (this.op1 == "/") {
                        this.num1 = (Convert.ToInt32(this.num1) / Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                }
            }
            else if (this.op0 == "-") {
                if (this.op1 == "+" || this.op1 == "-") {
                    this.num0 = (Convert.ToInt32(this.num0) - Convert
                        .ToInt32(this.num1)).ToString();
                    this.num1 = this.num2;
                    this.TextBox2.Text = this.TextBox3.Text;
                    this.TextBox4.Text = "null";
                    this.op0 = this.op1;
                    this.TextBox5.Text = this.TextBox6.Text;
                    this.TextBox6.Text = "null";
                }
                else {
                    if (this.op1 == "*") {
                        this.num1 = (Convert.ToInt32(this.num1) * Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                    else if (this.op1 == "/") {
                        this.num1 = (Convert.ToInt32(this.num1) / Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                }
            }
            else if (this.op0 == "*") {
                if (this.op1 == "+" || this.op1 == "-") {
                    this.num0 = (Convert.ToInt32(this.num0) * Convert
                        .ToInt32(this.num1)).ToString();
                    this.num1 = this.num2;
                    this.TextBox2.Text = this.TextBox3.Text;
                    this.TextBox4.Text = "null";
                    this.op0 = this.op1;
                    this.TextBox5.Text = this.TextBox6.Text;
                    this.TextBox6.Text = "null";
                }
                else {
                    if (this.op1 == "*") {
                        this.num1 = (Convert.ToInt32(this.num1) * Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                    else if (this.op1 == "/") {
                        this.num1 = (Convert.ToInt32(this.num1) / Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                }
            }
            else if (this.op0 == "/") {
                if (this.op1 == "+" || this.op1 == "-") {
                    this.num0 = (Convert.ToInt32(this.num0) / Convert
                        .ToInt32(this.num1)).ToString();
                    this.num1 = this.num2;
                    this.TextBox2.Text = this.TextBox3.Text;
                    this.TextBox4.Text = "null";
                    this.op0 = this.op1;
                    this.TextBox5.Text = this.TextBox6.Text;
                    this.TextBox6.Text = "null";
                }
                else {
                    if (this.op1 == "*") {
                        this.num1 = (Convert.ToInt32(this.num1) * Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                    else if (this.op1 == "/") {
                        this.num1 = (Convert.ToInt32(this.num1) / Convert
                            .ToInt32(this.num2)).ToString();
                        this.num2 = "null";
                        this.TextBox4.Text = "null";
                        this.op1 = "null";
                        this.TextBox6.Text = "null";
                    }
                }
            }
            */
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            this.getNum("1");
            this.TextBox1.Text += "1";
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            this.getNum("2");
            this.TextBox1.Text += "2";
        }

        protected void Button3_Click(object sender, EventArgs e)
        {
            this.getNum("3");
            this.TextBox1.Text += "3";
        }

        protected void Button4_Click(object sender, EventArgs e)
        {
            this.getNum("4");
            this.TextBox1.Text += "4";
        }

        protected void Button5_Click(object sender, EventArgs e)
        {
            this.getNum("5");
            this.TextBox1.Text += "5";
        }

        protected void Button6_Click(object sender, EventArgs e)
        {
            this.getNum("6");
            this.TextBox1.Text += "6";
        }

        protected void Button7_Click(object sender, EventArgs e)
        {
            this.getNum("7");
            this.TextBox1.Text += "7";
        }

        protected void Button8_Click(object sender, EventArgs e)
        {
            this.getNum("8");
            this.TextBox1.Text += "8";
        }

        protected void Button9_Click(object sender, EventArgs e)
        {
            this.getNum("9");
            this.TextBox1.Text += "9";
        }

        protected void Button10_Click(object sender, EventArgs e)
        {
            this.getNum("0");
            this.TextBox1.Text += "0";
        }

        protected void Button11_Click(object sender, EventArgs e)
        {
            this.getOp("+");
            this.TextBox1.Text += "+";
            if (this.TextBox7.Text != "null") {
                this.getTempResult();
            }
        }

        protected void Button12_Click(object sender, EventArgs e)
        {
            this.getOp("-");
            this.TextBox1.Text += "-";
            if (this.TextBox7.Text != "null") {
                this.getTempResult();
            }
        }

        protected void Button13_Click(object sender, EventArgs e)
        {
            this.getOp("*");
            this.TextBox1.Text += "*";
            if (this.TextBox7.Text != "null") {
                this.getTempResult();
            }
        }

        protected void Button14_Click(object sender, EventArgs e)
        {
            this.getOp("/");
            this.TextBox1.Text += "/";
            if (this.TextBox7.Text != "null") {
                this.getTempResult();
            }
        }

        protected void Button15_Click(object sender, EventArgs e)
        {
            if (this.op1 == "null") {
                if (this.op0 == "null") {
                    //      DoNothing;
                }
                else {
                    if (this.op0 == "+") {
                        this.num0 = (Convert.ToInt32(this.num0) + Convert
                            .ToInt32(this.num1)).ToString();
                    }
                    else if (this.op0 == "-") {
                        this.num0 = (Convert.ToInt32(this.num0) - Convert
                            .ToInt32(this.num1)).ToString();
                    }
                    else if (this.op0 == "*") {
                        this.num0 = (Convert.ToInt32(this.num0) * Convert
                            .ToInt32(this.num1)).ToString();
                    }
                    else if (this.op0 == "/") {
                        this.num0 = (Convert.ToInt32(this.num0) / Convert
                            .ToInt32(this.num1)).ToString();
                    }
                }
            }
            else {
                this.getTempResult();
                if (this.op0 == "+") {
                    this.num0 = (Convert.ToInt32(this.num0) + Convert
                        .ToInt32(this.num1)).ToString();
                }
                else if (this.op0 == "-") {
                    this.num0 = (Convert.ToInt32(this.num0) - Convert
                        .ToInt32(this.num1)).ToString();
                }
                else if (this.op0 == "*") {
                    this.num0 = (Convert.ToInt32(this.num0) * Convert
                        .ToInt32(this.num1)).ToString();
                }
                else if (this.op0 == "/") {
                    this.num0 = (Convert.ToInt32(this.num0) / Convert
                        .ToInt32(this.num1)).ToString();
                }
            }
            this.TextBox1.Text = this.num0;
            this.TextBox2.Text = this.num0;
            this.TextBox3.Text = "null";
            this.TextBox4.Text = "null";
            this.TextBox5.Text = "null";
            this.TextBox6.Text = "null";
        }
    }
}