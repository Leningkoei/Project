# 9. 已知2个求长方形面积和周长的函数分别为get_rectangle_area(r)和get_rectangle_peri(r). 试设计该函数, 并使用装饰器对这2个函数的合法性进行检查.
def deco(func):
    def flag(a, b):
        if a > 0 and b > 0:
            print('x = %d, y = %d' % (a, b))
            return func(a, b)
        else:
            return 'Error!'
    return flag


@deco
def area(a, b):
    return a * b


@deco
def peri(a, b):
    return 2 * (a + b)


if __name__ == '__main__':
    a = int(input('a = '))
    b = int(input('b = '))
    print(area(a, b))
    print(peri(a, b))
