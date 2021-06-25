from bs4 import BeautifulSoup
import pandas
import re
import urllib.request
#       爬取2016~当前戦果数据;
def getData():
    year = 2021
    rank = [ "联合", "1群", "2群", "3群" ]
    rankIndex = 0
    #       尝试太多次503了, 直接下载到本地了;
    #       urlString = "file:///C:/Users/Lening/Downloads/%E7%A7%B0%E5%8F%B7%E3%83%BB%E6%88%A6%E6%9E%9C%20-%20%E8%89%A6%E9%9A%8A%E3%81%93%E3%82%8C%E3%81%8F%E3%81%97%E3%82%87%E3%82%93%20-%E8%89%A6%E3%81%93%E3%82%8C-%20%E6%94%BB%E7%95%A5%20Wiki_.html"
    urlString = "https://wikiwiki.jp/kancolle/%E7%A7%B0%E5%8F%B7%E3%83%BB%E6%88%A6%E6%9E%9C"
    #       打开网页;
    webPage = urllib.request.urlopen(urlString).read()
    #       解析网页;
    webPageList = BeautifulSoup(webPage, "html.parser")
    #       爬取网页中所有的表格并从列表类型转换为字符串类型;
    allTable = str(webPageList.find_all("table"))
    #       将所有表格分割开;
    allTable = allTable.split("</table>")
    #       将最后残留的单独成1个字符串的']'删除;
    allTable.pop()
    allTable = str(allTable).split("<thead>")
    allTable.pop(0)
    #       得到以1表格为单位的目标表格列表;
    theTable = allTable
    #       以1表格为单位遍历所有目标表格;
    for table in theTable:
        #       以表级为单位创建.csv文件;
        if rankIndex > 3:
            rankIndex = 0
            year -= 1
        fileName = str(year) + "-" + rank[rankIndex]
        file = open("data/" + fileName + ".csv", "a+", encoding = "utf-8")
        file.write("服务器,1月,2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月")
        rankIndex += 1
        #       分离出tbody;
        tbody = table.split("<tbody>")
        tbody.pop(0)
        #       将1tbody转化为1row为单位的列表;
        allrow = str(tbody).split("</tr>")
        allrow.pop()
        #       以1row为单位遍历1tbody;
        for row in allrow:
            #       将1row转化为1elem为单位的列表;
            allelem = str(row).split("</td>")
            allelem.pop()
            #       以1elem为单位遍历1row;
            for elem in allelem:
                #       print(elem)
                #       行中的数据;
                if re.match(r".*>\d{4,5}", elem):
                    elem = re.match(r".*>(\d{4,5})", elem)
                    file.write(",")
                    file.write(elem.group(1))
                #       行开头;
                elif re.match(r"<tr><td style=\"text-align:center; width:140px;\">.*$", elem):
                    elem = re.match(r"<tr><td style=\"text-align:center; width:140px;\">(.*)$", elem)
                    file.write("\n")
                    file.write(elem.group(1))
                #       表开头 && 行开头;
                elif re.match(r"\['<tr><td style=\"text-align:center; width:140px;\">横須賀$", elem):
                    file.write("\n")
                    file.write("横須賀")
                else:
                    elem = "null"
                    file.write(",")
                    file.write("null")
        file.close()
def readData():
    for rank in [ "联合", "1群", "2群", "3群" ]:
        file = open("result/" + rank + ".csv", "a+", encoding = "utf-8")
        file.write("年份,刷新当月,刷新次月,刷新前月")
        file.close()
    for year in range(2021, 2015, -1):
        for rank in [ "联合", "1群", "2群", "3群" ]:
            fileName = str(year) + "-" + rank
            data = pandas.read_csv("data/" + fileName + ".csv")
            avg0 = data[ [ "3月", "6月", "9月", "12月" ] ].mean().mean()
            avg1 = data[ [ "4月", "7月", "11月", "1月" ] ].mean().mean()
            avg2 = data[ [ "5月", "8月", "12月", "2月" ] ].mean().mean()
            file = open("result/" + rank + ".csv", "a+", encoding = "utf-8")
            file.write("\n" + str(year) + "," + str(avg0) + "," + str(avg1)
                + "," + str(avg2))
            file.close()
    for rank in [ "联合", "1群", "2群", "3群" ]:
        data = pandas.read_csv("result/" + rank + ".csv")
        avg0 = data[ [ "刷新当月" ] ].mean().mean()
        avg1 = data[ [ "刷新次月" ] ].mean().mean()
        avg2 = data[ [ "刷新前月" ] ].mean().mean()
        file = open("result/" + rank + ".csv", "a+", encoding = "utf-8")
        file.write("\n" + "所有年份," + str(avg0) + "," + str(avg1) + ","
            + str(avg2))
        file.close()
if __name__ == "__main__":
    getData()
    readData()
