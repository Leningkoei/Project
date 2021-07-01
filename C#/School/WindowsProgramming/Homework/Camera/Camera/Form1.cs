using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using TestCame;
namespace Ex01_35
{
    public partial class Form1 : Form
    {
        //创建一个全局的 cVIdeo 类
        cVideo video;
        //Ex01_35.cVideo cVideo;
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, System.EventArgs e)
        {

        }

        private void button1_Click(object sender, System.EventArgs e)
        {
            //加载摄像头，并让画面长宽为 pictureBox 的长宽
            video = new cVideo(pictureBox1.Handle, pictureBox1.Width,
            pictureBox1.Height);
            video.StartWebCam();
        }

        private void button2_Click(object sender, System.EventArgs e)
        {
            video.CloseWebcam();
        }

        private void button3_Click(object sender, System.EventArgs e)
        {
            video.GrabImage(pictureBox1.Handle, "a.bmp");
        }
    }
}
