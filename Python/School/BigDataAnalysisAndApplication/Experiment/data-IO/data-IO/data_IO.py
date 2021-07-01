import pandas
import openpyxl
#       建立1个具有3个工作表的excel工作簿, 根据工作簿完成1个,
    #       多个, 全部的工作簿的导入;
table0 = pandas.read_excel("data/rz2.xlsx")
table1 = pandas.read_excel("data/rz3.xlsx")
table2 = pandas.read_excel("data/student.xlsx")
#       将excel文件的1st工作表导出为csv格式, 2nd工作表导出为
    #       txt格式, 并完成对相应的csv, txt文件的导入;
table0.to_csv("data/rz2.csv")
file = open("data/rz3.txt", "a+", encoding = "utf-8")
file.write(str(table1))
file.close()
#       将导入的csv文件和txt文件的内容导出到1个工作簿的2个工作
    #       表中;
table0 = pandas.read_csv("data/rz2.csv")
table0.to_excel("data/rz2Kai.xlsx")
table1 = pandas.read_table("data/rz3.txt")
table1.to_excel("data/rz3Kai.xlsx")
