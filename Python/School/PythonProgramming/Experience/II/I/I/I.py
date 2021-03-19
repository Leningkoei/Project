# 实验二-1-P306#3-1
# 从键盘输入3个数赋给a, b, c, 按从大到小的顺序输出.
List = []
a = float(input('a = '))
b = float(input('b = '))
c = float(input('c = '))
List.append(a)
List.append(b)
List.append(c)
List.sort()
print(List)