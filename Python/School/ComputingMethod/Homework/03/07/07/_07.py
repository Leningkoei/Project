#Homework3.7    在指定的定义域内, 绘制下列函数的图形y = 1 / (1 + (x - 2) ** 2) (0 <= x <= 4)

import matplotlib.pyplot as plt
import numpy as np

#定义x变量的范围
x = np.linspace(0, 4)
y = 1 / (1 + (x - 2) ** 2)

#指定将要绘制的变量, 图的颜色, 线宽, 线样
plt.plot(x, y, color = 'red', linewidth = 1.0, linestyle = '--')

#设置x, y轴的范围以及label标注
plt.xlim(-1, 5)
plt.ylim(-1, 2)
plt.xlabel('x')
plt.ylabel('y')

#移动坐标轴
#将x坐标轴设置到y = 0的位置
plt.gca().spines['bottom'].set_position(('data', 0))
#将y坐标轴设置到x = 0的位置
plt.gca().spines['left'].set_position(('data', 0))

#显示绘制的图
plt.show()
