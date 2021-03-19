#例3.4.6     矩阵的除运算

import numpy as np

A = np.array([ [ 1, 2, 3 ],
               [ 4, 2, 6 ],
               [ 7, 4, 9 ] ])
B = np.array([ [ 4 ],
               [ 1 ],
               [ 2 ] ])

A = np.linalg.inv(A)
X = np.dot(A, B)

print('X = ')
print(X)