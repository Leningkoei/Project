#例3.4.9     求矩阵A的1-范数, 2-范数和∞-范数

import numpy as np

A = np.array([ [ 4, -3 ],
               [ 2, 1 ] ])

n1 = np.linalg.norm(A, 1, None, False)
n2 = np.linalg.norm(A, 2, None, False)
n3 = np.linalg.norm(A, np.inf, None, False)

print('n1 = ', n1)
print('n2 = ', n2)
print('n3 = ', n3)
