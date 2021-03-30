#Homework3.8    已知矩阵A, B, 计算C = A + B, D = A - B, E = AB, F = BA

import numpy as np

A = np.array([ [ 1, 2, 3 ], 
               [ 0, 1, 4 ],
               [ 3, 0, 2 ] ])
B = np.array([ [ 4, 1, 2 ],
               [ 3, 2, 1 ],
               [ 0, 1, 2 ] ])

C = A + B
D = A - B
E = np.dot(A, B)
F = np.dot(B, A)

print('C = A + B =')
print(C)
print()
print('D = A - B =')
print(D)
print()
print('E = AB = ')
print(E)
print()
print('F = BA = ')
print(F)
