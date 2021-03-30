#Homework3.10   用ploy函数将下列多项式表示为幂级数形式y = 5 * (x - 3) * (x - 4) * (x + 1) * (x + 3)

from numpy.polynomial import Polynomial as poly

p0 = poly(( 5))
p1 = poly((-3, 1))
p2 = poly((-4, 1))
p3 = poly(( 1, 1))
p4 = poly(( 3, 1))

p = p0 * p1 * p2 * p3 * p4

result = list(p.coef)

print('result = {0[0]} + {0[1]} * x + {0[2]} * (x ** 2) + {0[3]} * (x ** 3) + {0[4]} * (x ** 4)'.format(result))
