#例3.4.11    求矩阵A的2-范数的条件数

import numpy as np

A = np.array([ [ 10, 7, 8, 7 ],
               [ 7, 5, 6, 5 ],
               [ 8, 6, 10, 9 ],
               [ 7, 5, 9, 10 ] ])

c = np.linalg.cond(A, 2)

print('c = ', c)
