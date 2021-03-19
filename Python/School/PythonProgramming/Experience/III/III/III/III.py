# 实验三 - 3 - P311 # 9-6
# 有两个文本文件(a.txt和b.txt), 各存放一行英文字母, 要求把这两个文件中的信息合并(按字母顺序排列), 写到一个新文件c.txt中


import re


def main():
    path = 'D:\\MicrosoftVisualStudio\\Project\\Python\\Experience\\III\\III\\III\\file'    # a.txt, b.txt, c.txt所在文件夹路径
    with open(path + '\\c.txt', 'w') as file:                                               # 写模式打开c.txt
        TempStr = Out(path, 'a') + Out(path, 'b')
        ResStr = Sort(TempStr)                                                              # 将TempStr按从小到大排序
        file.write(ResStr)
    return None


# 将path中的name.txt中的字母分别以字符的形式输出
def Out(path, name):
    TempStr = ''
    for line in open(path + '//' + name + '.txt', 'r'):
        line = re.sub('\n', '', line)                                                       # 删除line后面有可能出现的\n
        TempStr = TempStr + line
    return TempStr


# 字符串从小到大排序 Str -> ResStr
def Sort(Str):
    TempList = StrtoList(Str)                                                               # 将需要排序的字符串Str转换为中转列表TempList
    TempList.sort()                                                                         # 将中转TempList按从小到大排序
    ResStr = ListtoStr(TempList)                                                            # 将中转列表TempList转换为结果字符串ResStr
    return ResStr


# 字符串转换为列表 Str -> List
def StrtoList(Str):
    List = []
    for i in Str:
        List.append(i)
    return List


# 列表转换为字符串 List -> Str
def ListtoStr(List):
    Str = ''
    for i in List:
        Str = Str + i
    return (Str)


if __name__ == '__main__':
    main()