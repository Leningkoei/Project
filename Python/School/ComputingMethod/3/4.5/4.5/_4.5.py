#例3.4.5     矩阵相乘和数乘矩阵

import numpy as np

X = np.array([ [ 2, 3, 4, 5 ],
               [ 1, 2, 2, 1 ] ])
Y = np.array([ [ 0, 1, 1 ],
               [ 1, 1, 0 ],
               [ 0, 0, 1 ],
               [ 1, 0, 0 ] ])

Z = np.dot(X, Y)

A = 2 * X

print('Z = ')
print(Z)
print()
print('A = ')
print(A)