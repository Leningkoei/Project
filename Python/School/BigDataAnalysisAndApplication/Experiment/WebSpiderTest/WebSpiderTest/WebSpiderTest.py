#   爬取湖北大学贴吧首页的帖子标题

import urllib.request
from bs4 import BeautifulSoup
import time

print("***\n***\n***\n这是1个爬虫, 正在爬取百度贴吧的1个内容, 请耐心等候: ...")

#   设置保存数据的文件
f = open('D:\MicrosoftVisualStudio\Project\Python\School\BigDataAnalysisAndApplication\Experiment\WebSpiderTest\WebSpiderTest\HuBeiDaXueTieBa.txt', 'a+', encoding = 'utf-8')
end_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time()))
f.write('[时间: '+end_time+']\n[标题]湖北大学贴吧'+'\n')

#   获取网页源码
url = 'https://tieba.baidu.com/f?kw=%E6%B9%96%E5%8C%97%E5%A4%A7%E5%AD%A6&ie=utf-8&pn=0'

for page in range(0, 3):
    f.write(">============第{0:>2d}页============<\n".format(page))
    html = urllib.request.urlopen(url).read()

    #   网页解析
    soup = BeautifulSoup(html, 'html.parser')

    #   从网页中提取想要的数据所在的节点
    all = soup.find_all('a', class_ = "j_th_tit")

    #   从得到的标签集合中抽取想要的内容并写入保存文件
    all_list = str(all).split('</a>')
    all_list.pop()
    title_list = []
    for elem in all_list:
        title_list.append(elem.split('title=\"')[1])
    shin_title_list = []
    for title in title_list:
        shin_title_list.append(title.split('\">')[0])
    i = 0
    for title in shin_title_list:
        f.write("标题{0:>2d}: {1}\n".format(i, title))
        i = i + 1

    #   向后换页
    prefix = str(url).split('pn=')[0]
    pn = 50 + 50 * page
    url = prefix + 'pn=' + str(pn)

#   关闭文件
f.close()

print('***\n***\n***\n恭喜你, 已经完成任务, 请你打开文件: D:\MicrosoftVisualStudio\Project\Python\School\BigDataAnalysisAndApplication\Experiment\WebSpiderTest\WebSpiderTest\HuBeiDaXueTieBa.txt查阅')
