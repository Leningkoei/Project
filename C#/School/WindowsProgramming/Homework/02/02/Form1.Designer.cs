
namespace _02
{
    partial class frmNotepad
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(frmNotepad));
            this.mnusNotepad = new System.Windows.Forms.MenuStrip();
            this.tsmiFile = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiNew = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiOpen = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiSave = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiSaveAs = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.tsmiClose = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiEdit = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiUndo = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator2 = new System.Windows.Forms.ToolStripSeparator();
            this.tsmiCopy = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiCut = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiPaste = new System.Windows.Forms.ToolStripMenuItem();
            this.toolStripSeparator3 = new System.Windows.Forms.ToolStripSeparator();
            this.tsmiSelectAll = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiDate = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiFormat = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiAuto = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiFont = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiView = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiToolStrip = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiStatusStrip = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiHelp = new System.Windows.Forms.ToolStripMenuItem();
            this.tsmiAbout = new System.Windows.Forms.ToolStripMenuItem();
            this.tlsNotepad = new System.Windows.Forms.ToolStrip();
            this.新建NToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.打开OToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.保存SToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.打印PToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.toolStripSeparator = new System.Windows.Forms.ToolStripSeparator();
            this.剪切UToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.复制CToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.粘贴PToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.toolStripSeparator4 = new System.Windows.Forms.ToolStripSeparator();
            this.帮助LToolStripButton = new System.Windows.Forms.ToolStripButton();
            this.rtxtNotepad = new System.Windows.Forms.RichTextBox();
            this.odlgNotepad = new System.Windows.Forms.OpenFileDialog();
            this.tssLbl2 = new System.Windows.Forms.StatusStrip();
            this.tssLbl1 = new System.Windows.Forms.ToolStripStatusLabel();
            this.toolStripStatusLabel2 = new System.Windows.Forms.ToolStripStatusLabel();
            this.sdlgNotepad = new System.Windows.Forms.SaveFileDialog();
            this.fdlgNotepad = new System.Windows.Forms.FontDialog();
            this.tmrNotePad = new System.Windows.Forms.Timer(this.components);
            this.mnusNotepad.SuspendLayout();
            this.tlsNotepad.SuspendLayout();
            this.tssLbl2.SuspendLayout();
            this.SuspendLayout();
            // 
            // mnusNotepad
            // 
            this.mnusNotepad.BackColor = System.Drawing.SystemColors.ControlDarkDark;
            this.mnusNotepad.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.mnusNotepad.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tsmiFile,
            this.tsmiEdit,
            this.tsmiFormat,
            this.tsmiView,
            this.tsmiHelp});
            this.mnusNotepad.Location = new System.Drawing.Point(0, 0);
            this.mnusNotepad.Name = "mnusNotepad";
            this.mnusNotepad.Size = new System.Drawing.Size(584, 28);
            this.mnusNotepad.TabIndex = 0;
            this.mnusNotepad.Text = "menuStrip1";
            // 
            // tsmiFile
            // 
            this.tsmiFile.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tsmiNew,
            this.tsmiOpen,
            this.tsmiSave,
            this.tsmiSaveAs,
            this.toolStripSeparator1,
            this.tsmiClose});
            this.tsmiFile.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiFile.Name = "tsmiFile";
            this.tsmiFile.Size = new System.Drawing.Size(71, 24);
            this.tsmiFile.Text = "文件(&F)";
            // 
            // tsmiNew
            // 
            this.tsmiNew.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiNew.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiNew.Name = "tsmiNew";
            this.tsmiNew.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.N)));
            this.tsmiNew.Size = new System.Drawing.Size(224, 26);
            this.tsmiNew.Text = "新建(&N)";
            this.tsmiNew.Click += new System.EventHandler(this.新建NToolStripMenuItem_Click);
            // 
            // tsmiOpen
            // 
            this.tsmiOpen.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiOpen.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiOpen.Name = "tsmiOpen";
            this.tsmiOpen.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.O)));
            this.tsmiOpen.Size = new System.Drawing.Size(224, 26);
            this.tsmiOpen.Text = "打开(&0)";
            this.tsmiOpen.Click += new System.EventHandler(this.tsmiOpen_Click);
            // 
            // tsmiSave
            // 
            this.tsmiSave.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiSave.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiSave.Name = "tsmiSave";
            this.tsmiSave.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.S)));
            this.tsmiSave.Size = new System.Drawing.Size(224, 26);
            this.tsmiSave.Text = "保存(&S)";
            this.tsmiSave.Click += new System.EventHandler(this.保存SToolStripMenuItem_Click);
            // 
            // tsmiSaveAs
            // 
            this.tsmiSaveAs.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiSaveAs.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiSaveAs.Name = "tsmiSaveAs";
            this.tsmiSaveAs.Size = new System.Drawing.Size(224, 26);
            this.tsmiSaveAs.Text = "另存为(A)";
            this.tsmiSaveAs.Click += new System.EventHandler(this.tsmiSaveAs_Click);
            // 
            // toolStripSeparator1
            // 
            this.toolStripSeparator1.BackColor = System.Drawing.SystemColors.ControlDark;
            this.toolStripSeparator1.ForeColor = System.Drawing.SystemColors.Control;
            this.toolStripSeparator1.Name = "toolStripSeparator1";
            this.toolStripSeparator1.Size = new System.Drawing.Size(221, 6);
            // 
            // tsmiClose
            // 
            this.tsmiClose.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiClose.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiClose.Name = "tsmiClose";
            this.tsmiClose.Size = new System.Drawing.Size(224, 26);
            this.tsmiClose.Text = "退出(X)";
            this.tsmiClose.Click += new System.EventHandler(this.toolStripMenuItem2_Click);
            // 
            // tsmiEdit
            // 
            this.tsmiEdit.Checked = true;
            this.tsmiEdit.CheckState = System.Windows.Forms.CheckState.Checked;
            this.tsmiEdit.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tsmiUndo,
            this.toolStripSeparator2,
            this.tsmiCopy,
            this.tsmiCut,
            this.tsmiPaste,
            this.toolStripSeparator3,
            this.tsmiSelectAll,
            this.tsmiDate});
            this.tsmiEdit.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiEdit.Name = "tsmiEdit";
            this.tsmiEdit.Size = new System.Drawing.Size(71, 24);
            this.tsmiEdit.Text = "编辑(&E)";
            this.tsmiEdit.Click += new System.EventHandler(this.编辑EToolStripMenuItem_Click);
            // 
            // tsmiUndo
            // 
            this.tsmiUndo.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiUndo.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiUndo.Name = "tsmiUndo";
            this.tsmiUndo.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.Z)));
            this.tsmiUndo.Size = new System.Drawing.Size(224, 26);
            this.tsmiUndo.Text = "撤销(&U)";
            this.tsmiUndo.Click += new System.EventHandler(this.tsmiUndo_Click);
            // 
            // toolStripSeparator2
            // 
            this.toolStripSeparator2.BackColor = System.Drawing.SystemColors.ControlDark;
            this.toolStripSeparator2.ForeColor = System.Drawing.SystemColors.Control;
            this.toolStripSeparator2.Name = "toolStripSeparator2";
            this.toolStripSeparator2.Size = new System.Drawing.Size(221, 6);
            // 
            // tsmiCopy
            // 
            this.tsmiCopy.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiCopy.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiCopy.Name = "tsmiCopy";
            this.tsmiCopy.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.C)));
            this.tsmiCopy.Size = new System.Drawing.Size(224, 26);
            this.tsmiCopy.Text = "复制(&C)";
            this.tsmiCopy.Click += new System.EventHandler(this.复制ToolStripMenuItem_Click);
            // 
            // tsmiCut
            // 
            this.tsmiCut.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiCut.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiCut.Name = "tsmiCut";
            this.tsmiCut.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.X)));
            this.tsmiCut.Size = new System.Drawing.Size(224, 26);
            this.tsmiCut.Text = "剪切(&T)";
            this.tsmiCut.Click += new System.EventHandler(this.tsmiCut_Click);
            // 
            // tsmiPaste
            // 
            this.tsmiPaste.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiPaste.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiPaste.Name = "tsmiPaste";
            this.tsmiPaste.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.V)));
            this.tsmiPaste.Size = new System.Drawing.Size(224, 26);
            this.tsmiPaste.Text = "粘贴(&P)";
            this.tsmiPaste.Click += new System.EventHandler(this.tsmiPaste_Click);
            // 
            // toolStripSeparator3
            // 
            this.toolStripSeparator3.BackColor = System.Drawing.SystemColors.ControlDark;
            this.toolStripSeparator3.ForeColor = System.Drawing.SystemColors.Control;
            this.toolStripSeparator3.Name = "toolStripSeparator3";
            this.toolStripSeparator3.Size = new System.Drawing.Size(221, 6);
            // 
            // tsmiSelectAll
            // 
            this.tsmiSelectAll.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiSelectAll.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiSelectAll.Name = "tsmiSelectAll";
            this.tsmiSelectAll.ShortcutKeys = ((System.Windows.Forms.Keys)((System.Windows.Forms.Keys.Control | System.Windows.Forms.Keys.A)));
            this.tsmiSelectAll.Size = new System.Drawing.Size(224, 26);
            this.tsmiSelectAll.Text = "全选(&A)";
            this.tsmiSelectAll.Click += new System.EventHandler(this.tsmiSelectAll_Click);
            // 
            // tsmiDate
            // 
            this.tsmiDate.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiDate.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiDate.Name = "tsmiDate";
            this.tsmiDate.ShortcutKeys = System.Windows.Forms.Keys.F5;
            this.tsmiDate.Size = new System.Drawing.Size(224, 26);
            this.tsmiDate.Text = "日期(&D)";
            this.tsmiDate.Click += new System.EventHandler(this.日期DToolStripMenuItem_Click);
            // 
            // tsmiFormat
            // 
            this.tsmiFormat.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tsmiAuto,
            this.tsmiFont});
            this.tsmiFormat.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiFormat.Name = "tsmiFormat";
            this.tsmiFormat.Size = new System.Drawing.Size(75, 24);
            this.tsmiFormat.Text = "格式(&O)";
            this.tsmiFormat.Click += new System.EventHandler(this.tsmiFormat_Click);
            // 
            // tsmiAuto
            // 
            this.tsmiAuto.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiAuto.Checked = true;
            this.tsmiAuto.CheckState = System.Windows.Forms.CheckState.Checked;
            this.tsmiAuto.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiAuto.Name = "tsmiAuto";
            this.tsmiAuto.Size = new System.Drawing.Size(224, 26);
            this.tsmiAuto.Text = "自动换行(&W)";
            this.tsmiAuto.Click += new System.EventHandler(this.tsmiAuto_Click);
            // 
            // tsmiFont
            // 
            this.tsmiFont.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiFont.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiFont.Name = "tsmiFont";
            this.tsmiFont.Size = new System.Drawing.Size(224, 26);
            this.tsmiFont.Text = "字体(&F)";
            this.tsmiFont.Click += new System.EventHandler(this.tsmiFont_Click);
            // 
            // tsmiView
            // 
            this.tsmiView.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tsmiToolStrip,
            this.tsmiStatusStrip});
            this.tsmiView.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiView.Name = "tsmiView";
            this.tsmiView.Size = new System.Drawing.Size(73, 24);
            this.tsmiView.Text = "查看(&V)";
            // 
            // tsmiToolStrip
            // 
            this.tsmiToolStrip.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiToolStrip.Checked = true;
            this.tsmiToolStrip.CheckState = System.Windows.Forms.CheckState.Checked;
            this.tsmiToolStrip.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiToolStrip.Name = "tsmiToolStrip";
            this.tsmiToolStrip.Size = new System.Drawing.Size(224, 26);
            this.tsmiToolStrip.Text = "工具栏(&T)";
            // 
            // tsmiStatusStrip
            // 
            this.tsmiStatusStrip.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiStatusStrip.Checked = true;
            this.tsmiStatusStrip.CheckState = System.Windows.Forms.CheckState.Checked;
            this.tsmiStatusStrip.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiStatusStrip.Name = "tsmiStatusStrip";
            this.tsmiStatusStrip.Size = new System.Drawing.Size(224, 26);
            this.tsmiStatusStrip.Text = "状态栏(&S)";
            // 
            // tsmiHelp
            // 
            this.tsmiHelp.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tsmiAbout});
            this.tsmiHelp.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiHelp.Name = "tsmiHelp";
            this.tsmiHelp.Size = new System.Drawing.Size(75, 24);
            this.tsmiHelp.Text = "帮助(&H)";
            // 
            // tsmiAbout
            // 
            this.tsmiAbout.BackColor = System.Drawing.SystemColors.ControlDark;
            this.tsmiAbout.ForeColor = System.Drawing.SystemColors.Control;
            this.tsmiAbout.Name = "tsmiAbout";
            this.tsmiAbout.Size = new System.Drawing.Size(224, 26);
            this.tsmiAbout.Text = "关于记事本(&A)";
            this.tsmiAbout.Click += new System.EventHandler(this.tsmiAbout_Click);
            // 
            // tlsNotepad
            // 
            this.tlsNotepad.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.tlsNotepad.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.新建NToolStripButton,
            this.打开OToolStripButton,
            this.保存SToolStripButton,
            this.打印PToolStripButton,
            this.toolStripSeparator,
            this.剪切UToolStripButton,
            this.复制CToolStripButton,
            this.粘贴PToolStripButton,
            this.toolStripSeparator4,
            this.帮助LToolStripButton});
            this.tlsNotepad.Location = new System.Drawing.Point(0, 28);
            this.tlsNotepad.Name = "tlsNotepad";
            this.tlsNotepad.Size = new System.Drawing.Size(584, 27);
            this.tlsNotepad.TabIndex = 1;
            this.tlsNotepad.Text = "toolStrip1";
            this.tlsNotepad.ItemClicked += new System.Windows.Forms.ToolStripItemClickedEventHandler(this.tlsNotepad_ItemClicked);
            // 
            // 新建NToolStripButton
            // 
            this.新建NToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.新建NToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("新建NToolStripButton.Image")));
            this.新建NToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.新建NToolStripButton.Name = "新建NToolStripButton";
            this.新建NToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.新建NToolStripButton.Text = "新建(&N)";
            // 
            // 打开OToolStripButton
            // 
            this.打开OToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.打开OToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("打开OToolStripButton.Image")));
            this.打开OToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.打开OToolStripButton.Name = "打开OToolStripButton";
            this.打开OToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.打开OToolStripButton.Text = "打开(&O)";
            // 
            // 保存SToolStripButton
            // 
            this.保存SToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.保存SToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("保存SToolStripButton.Image")));
            this.保存SToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.保存SToolStripButton.Name = "保存SToolStripButton";
            this.保存SToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.保存SToolStripButton.Text = "保存(&S)";
            // 
            // 打印PToolStripButton
            // 
            this.打印PToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.打印PToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("打印PToolStripButton.Image")));
            this.打印PToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.打印PToolStripButton.Name = "打印PToolStripButton";
            this.打印PToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.打印PToolStripButton.Text = "打印(&P)";
            // 
            // toolStripSeparator
            // 
            this.toolStripSeparator.Name = "toolStripSeparator";
            this.toolStripSeparator.Size = new System.Drawing.Size(6, 27);
            // 
            // 剪切UToolStripButton
            // 
            this.剪切UToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.剪切UToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("剪切UToolStripButton.Image")));
            this.剪切UToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.剪切UToolStripButton.Name = "剪切UToolStripButton";
            this.剪切UToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.剪切UToolStripButton.Text = "剪切(&U)";
            // 
            // 复制CToolStripButton
            // 
            this.复制CToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.复制CToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("复制CToolStripButton.Image")));
            this.复制CToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.复制CToolStripButton.Name = "复制CToolStripButton";
            this.复制CToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.复制CToolStripButton.Text = "复制(&C)";
            // 
            // 粘贴PToolStripButton
            // 
            this.粘贴PToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.粘贴PToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("粘贴PToolStripButton.Image")));
            this.粘贴PToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.粘贴PToolStripButton.Name = "粘贴PToolStripButton";
            this.粘贴PToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.粘贴PToolStripButton.Text = "粘贴(&P)";
            // 
            // toolStripSeparator4
            // 
            this.toolStripSeparator4.Name = "toolStripSeparator4";
            this.toolStripSeparator4.Size = new System.Drawing.Size(6, 27);
            // 
            // 帮助LToolStripButton
            // 
            this.帮助LToolStripButton.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.帮助LToolStripButton.Image = ((System.Drawing.Image)(resources.GetObject("帮助LToolStripButton.Image")));
            this.帮助LToolStripButton.ImageTransparentColor = System.Drawing.Color.Magenta;
            this.帮助LToolStripButton.Name = "帮助LToolStripButton";
            this.帮助LToolStripButton.Size = new System.Drawing.Size(29, 24);
            this.帮助LToolStripButton.Text = "帮助(&L)";
            // 
            // rtxtNotepad
            // 
            this.rtxtNotepad.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.rtxtNotepad.BackColor = System.Drawing.SystemColors.WindowText;
            this.rtxtNotepad.ForeColor = System.Drawing.SystemColors.Window;
            this.rtxtNotepad.Location = new System.Drawing.Point(0, 58);
            this.rtxtNotepad.Name = "rtxtNotepad";
            this.rtxtNotepad.Size = new System.Drawing.Size(584, 324);
            this.rtxtNotepad.TabIndex = 2;
            this.rtxtNotepad.Text = "";
            this.rtxtNotepad.TextChanged += new System.EventHandler(this.rtxtNotepad_TextChanged);
            // 
            // odlgNotepad
            // 
            this.odlgNotepad.Filter = "RTF文件|*.rtf|所有文件|*.*";
            // 
            // tssLbl2
            // 
            this.tssLbl2.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.tssLbl2.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.tssLbl1,
            this.toolStripStatusLabel2});
            this.tssLbl2.Location = new System.Drawing.Point(0, 385);
            this.tssLbl2.Name = "tssLbl2";
            this.tssLbl2.Size = new System.Drawing.Size(584, 26);
            this.tssLbl2.TabIndex = 3;
            this.tssLbl2.Text = "statusStrip1";
            // 
            // tssLbl1
            // 
            this.tssLbl1.Name = "tssLbl1";
            this.tssLbl1.Size = new System.Drawing.Size(39, 20);
            this.tssLbl1.Text = "就绪";
            this.tssLbl1.Click += new System.EventHandler(this.toolStripStatusLabel1_Click);
            // 
            // toolStripStatusLabel2
            // 
            this.toolStripStatusLabel2.Name = "toolStripStatusLabel2";
            this.toolStripStatusLabel2.Size = new System.Drawing.Size(107, 20);
            this.toolStripStatusLabel2.Text = "显示日期, 时间";
            // 
            // sdlgNotepad
            // 
            this.sdlgNotepad.FileName = "无标题";
            this.sdlgNotepad.Filter = "RTF文件|*.rtf";
            // 
            // tmrNotePad
            // 
            this.tmrNotePad.Enabled = true;
            this.tmrNotePad.Interval = 1000;
            // 
            // frmNotepad
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 18F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ControlText;
            this.ClientSize = new System.Drawing.Size(584, 411);
            this.Controls.Add(this.tssLbl2);
            this.Controls.Add(this.rtxtNotepad);
            this.Controls.Add(this.tlsNotepad);
            this.Controls.Add(this.mnusNotepad);
            this.Font = new System.Drawing.Font("Consolas", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.SystemColors.Control;
            this.MainMenuStrip = this.mnusNotepad;
            this.Name = "frmNotepad";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "记事本";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.mnusNotepad.ResumeLayout(false);
            this.mnusNotepad.PerformLayout();
            this.tlsNotepad.ResumeLayout(false);
            this.tlsNotepad.PerformLayout();
            this.tssLbl2.ResumeLayout(false);
            this.tssLbl2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.MenuStrip mnusNotepad;
        private System.Windows.Forms.ToolStripMenuItem tsmiFile;
        private System.Windows.Forms.ToolStripMenuItem tsmiEdit;
        private System.Windows.Forms.ToolStripMenuItem tsmiFormat;
        private System.Windows.Forms.ToolStripMenuItem tsmiView;
        private System.Windows.Forms.ToolStripMenuItem tsmiHelp;
        private System.Windows.Forms.ToolStripMenuItem tsmiNew;
        private System.Windows.Forms.ToolStripMenuItem tsmiOpen;
        private System.Windows.Forms.ToolStripMenuItem tsmiSave;
        private System.Windows.Forms.ToolStripMenuItem tsmiSaveAs;
        private System.Windows.Forms.ToolStripMenuItem tsmiClose;
        private System.Windows.Forms.ToolStripMenuItem tsmiUndo;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator1;
        private System.Windows.Forms.ToolStripMenuItem tsmiCopy;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator2;
        private System.Windows.Forms.ToolStripMenuItem tsmiCut;
        private System.Windows.Forms.ToolStripMenuItem tsmiPaste;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator3;
        private System.Windows.Forms.ToolStripMenuItem tsmiSelectAll;
        private System.Windows.Forms.ToolStripMenuItem tsmiDate;
        private System.Windows.Forms.ToolStripMenuItem tsmiAuto;
        private System.Windows.Forms.ToolStripMenuItem tsmiFont;
        private System.Windows.Forms.ToolStripMenuItem tsmiToolStrip;
        private System.Windows.Forms.ToolStripMenuItem tsmiStatusStrip;
        private System.Windows.Forms.ToolStripMenuItem tsmiAbout;
        private System.Windows.Forms.ToolStrip tlsNotepad;
        private System.Windows.Forms.ToolStripButton 新建NToolStripButton;
        private System.Windows.Forms.ToolStripButton 打开OToolStripButton;
        private System.Windows.Forms.ToolStripButton 保存SToolStripButton;
        private System.Windows.Forms.ToolStripButton 打印PToolStripButton;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator;
        private System.Windows.Forms.ToolStripButton 剪切UToolStripButton;
        private System.Windows.Forms.ToolStripButton 复制CToolStripButton;
        private System.Windows.Forms.ToolStripButton 粘贴PToolStripButton;
        private System.Windows.Forms.ToolStripSeparator toolStripSeparator4;
        private System.Windows.Forms.ToolStripButton 帮助LToolStripButton;
        private System.Windows.Forms.RichTextBox rtxtNotepad;
        private System.Windows.Forms.OpenFileDialog odlgNotepad;
        private System.Windows.Forms.StatusStrip tssLbl2;
        private System.Windows.Forms.ToolStripStatusLabel tssLbl1;
        private System.Windows.Forms.ToolStripStatusLabel toolStripStatusLabel2;
        private System.Windows.Forms.SaveFileDialog sdlgNotepad;
        private System.Windows.Forms.FontDialog fdlgNotepad;
        private System.Windows.Forms.Timer tmrNotePad;
    }
}

