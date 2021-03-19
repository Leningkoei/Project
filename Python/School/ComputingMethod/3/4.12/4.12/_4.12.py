#例3.4.12    求矩阵A的秩

import numpy as np

A = np.array([ [ 1, 2, 3 ],
               [ 3, 4, 5 ],
               [ 7, 8, 9 ] ])

r = np.linalg.matrix_rank(A)

print('r = ', r)
