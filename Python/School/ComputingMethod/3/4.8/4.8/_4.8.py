#例3.4.8     求矩阵A的行列式

import numpy as np;

A = np.array([ [ 2, 3, 5 ],
               [ 1, 2, 0 ],
               [ 0, 3, 5 ] ])

d = np.linalg.det(A)

print('d = ', d)
