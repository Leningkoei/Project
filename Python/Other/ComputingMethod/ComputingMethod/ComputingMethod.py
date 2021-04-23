x = 1
for i in range(1, 10):
    print(i)
    pre_x = x
    x = 20 / (x ** 2 + 2 * x + 10)
    result = x - pre_x
    print(x)
    print(result)
    print("----------------")
print(7 / 13)

