#例3.4.3 生成1个3阶Hilbert矩阵

import numpy as np

H = 1./(np.arange(1, 4) + np.arange(0, 3)[:, np.newaxis])

print(H)
