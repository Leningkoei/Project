function inputScore()
{
    /*
    <table width="500px" border="1" cellpadding="0" cellspaceing="0" align="center">
        <tr>
            <td>
                姓名
            </td>
            <td>
                英语
            </td>
            <td>
                高数
            </td>
            <td>
                动态脚本
            </td>
            <td>
                总分
            </td>
            <td>
                平均分
            </td>
            <td>
                等级
            </td>
        </tr>
        <!-- loop begin -->
        <tr>
            <td>
                name0[i]
            </td>
            <!-- loop begin -->
            <td>
                input
            </td>
            <!-- loop end -->
            <td>
                sum
            </td>
            <td>
                avg
            </td>
            <td>
                level
            </td>
        </tr>
        <!-- loop end -->
    </table>
    */

    window.alert("友情提示: 请输入的成绩为数值, 否则会停留在出错处!")

    var
        avg,        //      = 0
        course0,
        i,          //      = 0
        name0,
        recode,
        sum;        //      =0

    document.write("<table width=\"500px\" border=\"1\" cellpadding=\"0\"" + "cellspacing=\"0\" align=\"center\"><tr><td>姓名</td>");
    course0 = new Array("英语", "高数", "动态脚本");
    for (n in course0)
    {
        document.write("<td>" + course0[n] + "</td>");
    }
    document.write("<td>总分</td><td>平均分</td><td>等级</td></tr>");
    name0 = new Array("孙志林", "刘博海", "志志雄");
    for (n in name0)
    {
        sum = 0;
        document.write("<tr><td>" + name0[n] + "</td>");
        for (i = 0; i < course0.length; i++)
        {
            ts = "输入" + name0[n] + "的" + course0[i] + "成绩: ";
            record = parseFloat(prompt(ts, ""));
            if (isNaN(record) || (record < 0) || (record > 100))
            {
                alert("您输入的数值为" + record + ", 该数值不合法, 请重新输入");
                i--;
                
                continue;
            }
            document.write("<td>" + record + "</td>");
            sum = sum + record;
        }
        document.write("<td>" + sum + "</td>");
        avg = Math.round(sum / course0.length);
        document.write("<td>" + avg + "</td>");
        if (avg < 60)
        {
            document.write("<td>不及格</td>");
        }
        else if (avg >= 60 && avg < 70)
        {
            document.write("<td>及格</td>");
        }
        else if (avg >= 70 && avg < 80)
        {
            document.write("<td>中等</td>");
        }
        else if (avg >= 80 && avg < 90)
        {
            document.write("<td>良好</td>");
        }
        else if (avg >= 90 && avg < 100)
        {
            document.write("<td>优秀</td>");
        }
        else
        {
            document.write("<td>nb</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}

function main()
{
    this.inputScore();
}

window.onload = main();
