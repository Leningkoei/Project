#例3.4.10 求矩阵A的∞-范数的条件数

import numpy as np

A = np.array([ [ 2, 6 ],
               [ 2, 6.0001 ] ])

c = np.linalg.cond(A, np.inf)

print('c = ', c)
