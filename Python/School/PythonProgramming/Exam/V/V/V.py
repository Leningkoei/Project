# 5. 总数为sum. 每次减少一半多2个, 第6次时仅剩1个
sum = 1
for i in range(5):
    sum = (sum + 2) * 2
    print('第%2d天时还有%4d个桃子, 又吃了%3d个桃子' % ((5 - i), sum, (sum / 2 + 2)))
print('sum = %d' % sum)
