#       理论
    #       数据处理
        #       数据分组
            #       根据数据分析对象的特征, 按照一定的数据指标, 把数据划分为不同的区间来进行研究, 以揭示其内在的联系和规律性. 简单来说: 就是新增1列, 将原来的数据按照其性质归入新的类别中
            #       cut(series, bins, right = True, labels = NULL)
                #       series: 需要分组的数据
                #       bins: 分组的依据数据
                #       right: 分组的时候右边是否闭合
                #       labels: 分组的自定义标签, 可以不定义

        #       日期处理
            #       日期转换
                #       将字符型的日期格式转换为日期格式数据的过程
                #       to_datetime(dateString, format = "%Y/%m/%d/%H/%M/%S")
                    #       format格式
                        #       %Y: 年份
                        #       %m: 月份
                        #       %d: 日期
                        #       %H: 小时
                        #       %M: 分钟
                        #       %S: 秒钟

                #       eg
                    #       to_datetime(df.注册时间, formate = "%Y/%m/%d")

            #       日期格式化转换
                #       将日期型的数据按照给定的格式转化为字符型数据
                #       apply(lambda x: 处理逻辑)
                #       eg
                    #       df_dt = to_datetime(df.注册时间, format = "%Y/%m/%d")
                    #       df_dt_str = df_dt.apply(df.注册时间, format = "%Y/%m/%d")

            #       日期抽取
                #       从日期格式里面抽取出需要的部分属性
                #       Date_dt.dt.property
                    #       property的值
                        #       second: 1~60秒, 从1开始到60
                        #       minute: 1~60分, 从1开始到60
                        #       hour: 1~24小时, 从1开始到24
                        #       day: 1~31日, 一个月中第n天(1~31)
                        #       month: 1~12月, 从1开始到12
                        #       year: 年份
                        #       weekday: 1~7, 一周中的第n天, 从1开始到7

#       实例

import numpy as np
import pandas
from datetime import datetime
from pandas import DataFrame
from pandas import read_csv
from pandas import to_datetime
from pandas import to_numeric

#       数据分组实例
    #       分组前
            #       id      brand   num     price   
            #       1       130     123     159     
            #       2       131     124     753     
            #       3       132     125     456     
            #       4       133     126     852     

    #       分组后
            #       id      brand   num     price   type    
            #       1       130     123     159     <500    
            #       2       131     124     753     >500    
            #       3       132     125     456     <500    
            #       4       133     126     852     >500    

def groupData():
    df = read_csv("data/rz2.csv", sep = ',')
    print(df)
    print()
    bins = [min(df.price) - 1, 500, max(df.price) + 1]
    labels = ["<500", ">500"]
    #       dfRight的右区间(默认)为True
    dfRight = pandas.cut(df.price, bins)
    print(dfRight)
    print()
    #       dfLift的右区间设置为False
    dfLift = pandas.cut(df.price, bins, right = False)
    print(dfLift)
    print()
    #       只输出索引列和标签列
    dfLess = pandas.cut(df.price, bins, right = False, labels = labels)
    print(dfLess)
    print()
    #       全部输出
    df["type"] = pandas.cut(df.price, bins, right = False, labels = labels)
    print(df)

#       日期处理实例
def processDate():
    df = read_csv("data/rz3.csv", sep = ',', encoding = "utf8")
    print(df)
    print()
    #       日期转换
    dfDate = to_datetime(df.date, format = "%Y/%m/%d")
    print(dfDate)
    print()
    #       日期格式化转换
    dfDateStr = dfDate.apply(lambda x: datetime.strftime(x, "%Y/%m/%d"))
    print(dfDateStr)
    print()
    #       日期抽取
    dfYear = dfDate.dt.year
    print(dfYear)
    print()
    dfDay = dfDate.dt.day
    print(dfDay)

#       分析案例
def decideScholarship():
    def noChinese(x):
        if x == "缺考" or x == "作弊" or str(x) == "nan":
            x = 0

        return x
    def standizeScore(i):
        i = i * (i - i.min()) / (i.max() - i.min())
        i = round(i, 2)
        return i

    student = read_csv("data/student.csv", sep = ',', encoding = "utf8")
    #       删除重复行
    student = student.drop_duplicates()
    student = student.replace("缺考", 0)
    student = student.replace("作弊", 0)
    student = student.replace(np.nan, 0)
    #student = student.applymap(lambda x: noChinese(x))
    #       将以字符串存储的纯数字数据转化成数字类型
    student = student.apply(to_numeric, errors = "ignore")
    student["sumScore"] = student.英语 + student.体育 + student.军训 \
        + student.数分 + student.高代 + student.解几
    bins = [student.sumScore.min() - 1, 400, 450, student.sumScore.max() + 1]
    labels = ["一般", "较好", "优秀"]
    student["情况"] = pandas.cut(student.sumScore, bins, labels = labels)
    print(student)
    student.英语 = standizeScore(student.英语)
    student.体育 = standizeScore(student.体育)
    student.军训 = standizeScore(student.军训)
    student.数分 = standizeScore(student.数分)
    student.高代 = standizeScore(student.高代)
    student.解几 = standizeScore(student.解几)
    student["sumScore0"] = student.英语 + student.体育 + student.军训 \
        + student.数分 + student.高代 + student.解几
    print(student)

if __name__ == "__main__":
    groupData()
    print(">===========")
    processDate()
    print(">===========")
    decideScholarship()
