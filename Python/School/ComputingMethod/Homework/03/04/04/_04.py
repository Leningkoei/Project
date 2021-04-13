#   习题3.4   给定数组x = [1:99], 编写程序移除x中的所有素数, 然后计算其全部元素之和

x = []
for i in range(1, 100):
    x.append(i)

for i in x:
    if i % 2 != 0:
        x.remove(i)
sum0 = sum(x)
print(sum0)

