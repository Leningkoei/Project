def fun_es(x, n):
    result = 0
    for i in range(0, n + 1):
        result_last = result
        result += x ** i / factorial(i)
        print("第{0}项结果: {1}".format(i, result - result_last))

    return result

def factorial(num):
    result = 1
    if num == 0:
        result = 1
    else:
        for i in range(1, num + 1):
            result *= i

    return result

