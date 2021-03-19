#矩阵的加减运算

import numpy as np

A = np.array([ [ 1, 1, 1],
               [ 1, 2, 3],
               [ 1, 3, 6] ])
B = np.array([ [ 8, 1, 6],
               [ 3, 5, 7],
               [ 4, 9, 2] ])

C = A + B
D = A - B

print('C = ')
print(C)
print()
print('D = ')
print(D)
