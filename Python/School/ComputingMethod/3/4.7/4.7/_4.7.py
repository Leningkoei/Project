#例3.4.7     求矩阵A的逆矩阵

import numpy as np

A = np.array([ [ 2, 2, 3 ],
               [ 1, -1, 0 ],
               [ -1, 2, 1 ] ])

Y = np.linalg.inv(A)

print('Y = ')
print(Y)
