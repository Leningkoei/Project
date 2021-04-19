using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Windows.UI;
using Windows.UI.Text;

// https://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x804 上介绍了“空白页”项模板

namespace HelloCode
{
    /// <summary>
    /// 可用于自身或导航至 Frame 内部的空白页。
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            this.InitializeComponent();
            this.FontFamily = new FontFamily("Times New Roman");
            this.FontSize = 96;
            this.FontStyle = FontStyle.Italic;
            this.Foreground = new SolidColorBrush(Colors.Yellow);

            TextBlock txtblk = new TextBlock();
            txtblk.Text = "Hello NMSL";
            /// txtblk.FontFamily = new FontFamily("Times New Roman");
            /// txtblk.FontSize = 96;
            /// txtblk.FontStyle = FontStyle.Italic;
            ///txtblk.Foreground = new SolidColorBrush(Colors.Yellow);
            txtblk.HorizontalAlignment = HorizontalAlignment.Center;
            txtblk.VerticalAlignment = VerticalAlignment.Center;

            contentGrid.Children.Add(txtblk);
        }
    }
}
