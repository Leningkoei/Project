import pandas
data = pandas.read_csv("sale-data.csv")
#       print(data)
formHead = [ "U盘", "电子表", "电脑支架", "插座", "电池", "音箱", "鼠标", "usb数据线",
    "手机充电线", "键盘" ]
dataRelation = data.loc[ :, formHead ].corr()
#       print(dataRelation)
result = []
rowIndex = 0
#       以数组的形式, 提取dataframe的每行;
for row in dataRelation.iterrows():
    columnIndex = 0
    #       以数组的形式, 提取dataframe每行中的数值部分;
    for value in row[1]:
        if (0.8 <= value <= 1.0 or -1.0 <= value <= -0.8):
            #       提取当前元素在dataform的横坐标的名称;
            x = formHead[rowIndex]
            #       提取当前元素在dataform的纵坐标的名称;
            y = formHead[columnIndex]
            #       如果横坐标 != 纵坐标 and [纵坐标, 横坐标]不在result列表中;
            if (x != y and [y, x] not in result):
                #       将当前元素的[横坐标, 纵坐标]加入result数组中;
                result.append([x, y])
        columnIndex += 1
    rowIndex += 1
#       输出result数组;
print(result)
