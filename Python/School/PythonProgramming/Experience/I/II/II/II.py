#实验一-2-P306#2-3
#编写程序求解方程x * x + 4 * x + 3 = 0的两个根(x1和x2), 然后使用字符串格式化函数输出结果: x1 = value1, x2 = value2.
import math
a = 1
b = 4
c = 3
delta = b * b - 4 * a * c
if delta < 0:
    print ('error')
else:
    value1 = (-b - math.sqrt(delta))/(2 * a)
    value2 = (-b + math.sqrt(delta))/(2 * a)
    print('value1 = %d, value2 = %d' % (value1, value2))