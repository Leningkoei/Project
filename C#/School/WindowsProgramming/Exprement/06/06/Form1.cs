using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _06
{
    public partial class Form1 : Form
    {
        Graphics g;
        Point pStart, pEnd;
        int ChoiceGraph;
        int penWidth;
        enum mySelected{ Pencil, Line, Ellipse, FillEllipse, Rec, FillRec, Eraser };
        public Form1()
        {
            InitializeComponent();
        }

        private void btnTool_Click(object sender, EventArgs e)
        {
            ChoiceGraph = Convert.ToInt32(((Button)sender).Tag);
        }
        
        private void btnColor_Click(object sender, EventArgs e)
        {
            if (((Button)sender).Text == "C")
            {
                if (colorDialog1.ShowDialog() == DialogResult.OK)
                {
                    btnControl.BackColor = colorDialog1.Color;
                }
            }
            else
            {
                btnControl.BackColor = ((Button)sender).BackColor;
            }
        }
        private void pictureBox1_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                pStart.X = e.X;
                pStart.Y = e.Y;
            }
        }
        private void Change_Point()
        {
            Point pTemp = new Point();
            if (pStart.X < pEnd.X)
            {
                if (pStart.Y > pEnd.Y)
                {
                    pTemp.Y = pStart.Y;
                    pStart.Y = pEnd.Y;
                    pEnd.Y = pTemp.Y;
                }
            }
            if (pStart.X > pEnd.X)
            {
                if (pStart.Y < pEnd.Y)
                {
                    pTemp.X = pStart.X;
                    pStart.X = pEnd.X;
                    pEnd.X = pTemp.X;
                }
                if (pStart.Y > pEnd.Y)
                {
                    pTemp = pStart;
                    pStart = pEnd;
                    pEnd = pTemp;
                }
            }
        }
        private void pictureBox1_MouseMove(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                switch (ChoiceGraph)
                {
                    case (int)mySelected.Pencil:
                        Pen pen1 = new Pen(btnControl.BackColor, penWidth);
                        pEnd.X = e.X;
                        pEnd.Y = e.Y;
                        g.DrawLine(pen1, pStart, pEnd);
                        pStart = pEnd;
                        break;
                    case (int)mySelected.Eraser:
                        Pen pen2 = new Pen(Color.White, penWidth);
                        pEnd.X = e.X;
                        pEnd.Y = e.Y;
                        g.DrawLine(pen2, pStart, pEnd);
                        pStart = pEnd;
                        break;
                    default:
                        break;
                }
            }
        }
        private void btnLine1_Click(object sender, EventArgs e)
        {
            btnLine1.BackColor = Color.White;
            btnLine2.BackColor = Color.White;
            btnLine3.BackColor = Color.White;
            btnLine4.BackColor = Color.White;
            btnLine5.BackColor = Color.White;
            ((Button)sender).BackColor = Color.Black;
            penWidth = Convert.ToInt32(((Button)sender).Tag);
        }
        private void btnNew_Click(object sender, EventArgs e)
        {
              pictureBox1.Refresh();
        }
        private void btnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            g = pictureBox1.CreateGraphics();
            ChoiceGraph = (int)mySelected.Pencil;
            penWidth = 3;
            btnControl.BackColor = btnBlack.BackColor;
        }

        private void btnRead_Click(object sender, EventArgs e)
        {
            btnControl.BackColor = btnRead.BackColor;
        }

        private void btnYellow_Click(object sender, EventArgs e)
        {
            btnControl.BackColor = btnYellow.BackColor;
        }

        private void btnGreen_Click(object sender, EventArgs e)
        {
            btnControl.BackColor = btnGreen.BackColor;
        }

        private void btnBlack_Click(object sender, EventArgs e)
        {
            btnControl.BackColor = btnBlack.BackColor;
        }

        private void btnBlue_Click(object sender, EventArgs e)
        {
            btnControl.BackColor = btnBlue.BackColor;
        }

        private void btnLine2_Click(object sender, EventArgs e)
        {
            btnLine1.BackColor = Color.White;
            btnLine2.BackColor = Color.White;
            btnLine3.BackColor = Color.White;
            btnLine4.BackColor = Color.White;
            btnLine5.BackColor = Color.White;
            ((Button)sender).BackColor = Color.Black;
            penWidth = Convert.ToInt32(((Button)sender).Tag);
        }

        private void btnLine3_Click(object sender, EventArgs e)
        {
            btnLine1.BackColor = Color.White;
            btnLine2.BackColor = Color.White;
            btnLine3.BackColor = Color.White;
            btnLine4.BackColor = Color.White;
            btnLine5.BackColor = Color.White;
            ((Button)sender).BackColor = Color.Black;
            penWidth = Convert.ToInt32(((Button)sender).Tag);
        }

        private void btnLine4_Click(object sender, EventArgs e)
        {
            btnLine1.BackColor = Color.White;
            btnLine2.BackColor = Color.White;
            btnLine3.BackColor = Color.White;
            btnLine4.BackColor = Color.White;
            btnLine5.BackColor = Color.White;
            ((Button)sender).BackColor = Color.Black;
            penWidth = Convert.ToInt32(((Button)sender).Tag);
        }

        private void btnLine5_Click(object sender, EventArgs e)
        {
            btnLine1.BackColor = Color.White;
            btnLine2.BackColor = Color.White;
            btnLine3.BackColor = Color.White;
            btnLine4.BackColor = Color.White;
            btnLine5.BackColor = Color.White;
            ((Button)sender).BackColor = Color.Black;
            penWidth = Convert.ToInt32(((Button)sender).Tag);
        }

        private void pictureBox1_MouseUp(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                pEnd.X = e.X;
                pEnd.Y = e.Y;
                switch (ChoiceGraph)
                {
                    case (int)mySelected.Line:
                        Pen pen1 = new Pen(btnControl.BackColor, penWidth);
                        g.DrawLine(pen1, pStart, pEnd);
                        break;
                    case (int)mySelected.Ellipse:
                        Change_Point();
                        Pen pen2 = new Pen(btnControl.BackColor, penWidth);
                        g.DrawEllipse(pen2, pStart.X, pStart.Y, pEnd.X - pStart.X, pEnd.Y - pStart.Y);
                        break;
                    case (int)mySelected.FillEllipse:
                        Change_Point();
                        SolidBrush myBrush1 = new SolidBrush(btnControl.BackColor);
                        Rectangle rec1 = new Rectangle(pStart.X, pStart.Y, pEnd.X - pStart.X, pEnd.Y - pStart.Y);
                        g.FillEllipse(myBrush1, rec1);

                        break;
                    case (int)mySelected.Rec:
                        Change_Point();
                        Pen pen3 = new Pen(btnControl.BackColor, penWidth);
                        g.DrawRectangle(pen3, pStart.X, pStart.Y, pEnd.X - pStart.X, pEnd.Y - pStart.Y);
                        break;
                    case (int)mySelected.FillRec:
                        Change_Point();
                        SolidBrush myBrush2 = new SolidBrush(btnControl.BackColor);
                        Rectangle rec2 = new Rectangle(pStart.X, pStart.Y, pEnd.X - pStart.X, pEnd.Y - pStart.Y);
                        g.FillRectangle(myBrush2, rec2);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
