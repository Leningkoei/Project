# 1. 从键盘分别为3个变量a, b, c赋值(输入时有提示信息)'python', 100, 4.5678, 并格式化输出. 其中, c保留2为小数.
def main():
    a = str(input('Input \'python\': '))
    b = int(input('Input \'100\': '))
    c = float(input('Input \'4.5678\': '))
    print('a = %s, b = %d, c = %.2f' % (a, b, c))
    return None


if __name__ == '__main__':
    main()
