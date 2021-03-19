# 实验二-2-P307#4-3
# 列表list = [3, 8, 11, 26, 47], 从键盘输入一个新元素, 将该元素插入列表list中, 保持列表list1中的元素有序.
list1 = [3, 8, 11, 26, 47]
a = int(input('a = '))
list1.append(a)
list1.sort()                # 升序
print(list1)