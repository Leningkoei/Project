# 实验二 - 3 - P308 # 5-3
# 编写一个函数func(str), 计算并返回字符串str中的数字, 字母及其他类型的字符的个数.
str1 = 'abcd'
def func(str1):
    a = 0
    b = 0
    c = 0
    for i in str1:
        if i >= '0' and i <= '9':
            a = a + 1
        elif (i >= 'a' and i <= 'z') or (i >= 'A' and i <= 'Z'):
            b = b + 1
        else:
            c = c + 1
    print(a, b, c)
    return 0
func(str1)