#例3.4.1 计算垂直于向量(1, 2, 3)和(4, 5, 6)的向量

import numpy as np

A = np.array([ 1, 2, 3 ])
B = np.array([ 4, 5, 6 ])
C = np.cross(A, B)

print('C = ', C)
