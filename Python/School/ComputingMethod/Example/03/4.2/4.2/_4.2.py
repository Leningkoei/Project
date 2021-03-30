#例4.3.2 计算向量a = (1, 2, 3), b = (4, 5, 6)和c = (-3, 6, -3)的混合积a * (b × c)

import numpy as np

a = [ 1, 2, 3 ]
b = [ 4, 5, 6 ]
c = [ -3, 6, -3 ]

x = np.dot(a, np.cross(b, c))

print('x = ', x)
