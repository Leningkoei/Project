using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace _02
{
    public partial class frmNotepad : Form
    {
        bool b = false;
        bool s = true;
        public frmNotepad()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void 新建NToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (b == true || rtxtNotepad.Text.Trim() != "") {
                if (s == false) {
                    string result;
                    result = MessageBox.Show("文件尚未保存, 是否保存?", "保存文件",
                        MessageBoxButtons.YesNoCancel).ToString();
                    switch (result) {
                        case "Yes":
                            if (b == true) {
                                rtxtNotepad.SaveFile(odlgNotepad.FileName);
                            }
                            else if (sdlgNotepad.ShowDialog() == DialogResult.OK) {
                                rtxtNotepad.SaveFile(sdlgNotepad.FileName);
                            }
                            s = true;
                            rtxtNotepad.Text = "";
                            break;
                        case "No":
                            b = false;
                            rtxtNotepad.Text = "";
                            break;
                    }
                }
            }
        }

        private void 保存SToolStripMenuItem_Click(object sender, EventArgs e)
        {
            if (b == true && rtxtNotepad.Modified == true) {
                this.rtxtNotepad.SaveFile(this.odlgNotepad.FileName);
                s = true;
            }
            else if (b == false && this.rtxtNotepad.Text.Trim() != ""
                && this.sdlgNotepad.ShowDialog() == DialogResult.OK) {
                this.rtxtNotepad.SaveFile(this.sdlgNotepad.FileName);
                s = true;
                b = true;
                this.odlgNotepad.FileName = this.sdlgNotepad.FileName;
            }
        }

        private void toolStripMenuItem2_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void 编辑EToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        private void 复制ToolStripMenuItem_Click(object sender, EventArgs e)
        {
            this.rtxtNotepad.Copy();
        }

        private void 日期DToolStripMenuItem_Click(object sender, EventArgs e)
        {
            rtxtNotepad.AppendText(System.DateTime.Now.ToString());
        }

        private void tsmiFormat_Click(object sender, EventArgs e)
        {

        }

        private void rtxtNotepad_TextChanged(object sender, EventArgs e)
        {
            s = false;
        }

        private void toolStripStatusLabel1_Click(object sender, EventArgs e)
        {

        }

        private void tsmiOpen_Click(object sender, EventArgs e)
        {
            if (b == true || rtxtNotepad.Text.Trim() != "") {
                if (s == false) {
                    string result;
                    result = MessageBox.Show("文件尚未保存, 是否保存?", "保存文件",
                        MessageBoxButtons.YesNoCancel).ToString();
                    switch (result) {
                        case "Yes":
                            if (b == true) {
                                rtxtNotepad.SaveFile(this.odlgNotepad.FileName);
                            }
                            else if (this.sdlgNotepad.ShowDialog() == DialogResult.OK) {
                                this.rtxtNotepad.SaveFile(this.sdlgNotepad.FileName);
                            }
                            s = true;
                            break;
                        case "No":
                            b = false;
                            this.rtxtNotepad.Text = "";
                            break;
                    }
                }
            }
            this.odlgNotepad.RestoreDirectory = true;
            if ((this.odlgNotepad.ShowDialog() == DialogResult.OK)
                && this.odlgNotepad.FileName != "") {
                this.rtxtNotepad.LoadFile(this.odlgNotepad.FileName);
                b = true;
            }
            s = true;
        }

        private void tsmiSaveAs_Click(object sender, EventArgs e)
        {
            if (this.sdlgNotepad.ShowDialog() == DialogResult.OK) {
                this.rtxtNotepad.SaveFile(this.sdlgNotepad.FileName);
                s = true;
            }
        }

        private void tsmiUndo_Click(object sender, EventArgs e)
        {
            this.rtxtNotepad.Undo();
        }

        private void tsmiCut_Click(object sender, EventArgs e)
        {
            this.rtxtNotepad.Cut();
        }

        private void tsmiPaste_Click(object sender, EventArgs e)
        {
            this.rtxtNotepad.Paste();
        }

        private void tsmiSelectAll_Click(object sender, EventArgs e)
        {
            this.rtxtNotepad.SelectAll();
        }

        private void tsmiAuto_Click(object sender, EventArgs e)
        {
            if (this.tsmiAuto.Checked == false) {
                tsmiAuto.Checked = true;
                this.rtxtNotepad.WordWrap = true;
            }
            else {
                tsmiAuto.Checked = false;
                this.rtxtNotepad.WordWrap = false;
            }
        }

        private void tsmiFont_Click(object sender, EventArgs e)
        {
            this.fdlgNotepad.ShowColor = true;
            if (this.fdlgNotepad.ShowDialog() == DialogResult.OK) {
                this.rtxtNotepad.SelectionColor = this.fdlgNotepad.Color;
                this.rtxtNotepad.SelectionFont = this.fdlgNotepad.Font;
            }
        }

        private void tsmiAbout_Click(object sender, EventArgs e)
        {
            frmAbout ob_FrmAbout = new frmAbout();
            ob_FrmAbout.Show();
        }

        private void tlsNotepad_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            int n;
            n = this.tlsNotepad.Items.IndexOf(e.ClickedItem);
            switch (n) {
                case 0:
                    this.新建NToolStripMenuItem_Click(sender, e);
                    break;
                case 1:
                    this.tsmiOpen_Click(sender, e);
                    break;
                case 2:
                    this.保存SToolStripMenuItem_Click(sender, e);
                    break;
                case 4:
                    this.tsmiCut_Click(sender, e);
                    break;
                case 5:
                    this.tsmiPaste_Click(sender, e);
                    break;
                case 7:
                    this.tsmiAbout_Click(sender, e);
                    break;
            }
        }
        private void tmrNotepad_Tick(object sender, EventArgs e)
        {
            tssLbl2.Text = System.DateTime.Now.ToString();
        }
        private void frmNotepad_SizeChanged(object sender, EventArgs e)
        {
            frmNotepad ob_frmNotepad = new frmNotepad();
            tssLbl1.Width = this.Width / 2 - 12;
            tssLbl2.Width = this.tssLbl1.Width;
        }
    }
}
