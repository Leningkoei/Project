# 实验二 - 4 - P309 # 6 - 2
# 设计一个'超市进销存管理系统', 要求如下:
# (1) 系统包括7种操作, 分别是:
#     1. 查询所有商品
#     2. 添加商品
#     3. 修改商品
#     4. 删除商品
#     5. 卖出端口
#     6. 汇总
#    -1. 退出系统
# (2) 选择操作序号' 1', 显示所有商品
# (3) 选择操作序号' 2', 添加新的商品(包括商品名称, 数量和进货价格)
# (4) 选择操作序号' 3', 修改商品
# (5) 选择操作序号' 4', 删除商品
# (6) 选择操作序号' 5', 卖出商品(包括商品的名称, 数量和售出价格)
# (7) 选择操作序号' 6', 汇总当天卖出商品, 包括每种销售商品名称, 数量, 进货总价, 销售总价
# (8) 选择操作序号'-1', 退出系统


# 定义类Goods
class Goods:


    # 构造方法
    def __init__(self, Name, Count, Price):
        self.Name = Name        # 名称
        self.Count = Count      # 数量
        self.Price = Price      # 进货价格
        return None


    # return
    def __str__(self):
        return 'Name = %s, Count = %s, Price = %s' % (self.Name, self.Count, self.Price)


class GoodsManager:


    # 初始化
    List = []
    SaleList = []
    NameList = []
    CountList = []
    PriceList = []
    AllPrice = 0
    AllSalePrice = 0


    # 菜单
    def Menu(self):
        print('\"超市进销存管理系统\"菜单:')
#-----------------------------------------------------------------------------------------------------------------------
        print('1. GoodsList')
        print('2. AddGoods')
        print('3. ChangeGoods')
        print('4. DelatGoods')
        print('5. SaleGoods')
        print('6. AboveAll')
        print('0. Exit')
        while(True):
            print('*****************************************************************************************************')
            flag = int(input('flag = '))
#-----------------------------------------------------------------------------------------------------------------------
            if flag == 1:
                self.GoodsList()
            elif flag == 2:
                self.AddGoods()
            elif flag == 3:
                self.ChangeGoods()
            elif flag == 4:
                self.DelatGoods()
            elif flag == 5:
                self.SaleGoods()
            elif flag == 6:
                self.AboveAll()
            elif flag == 0:
                print('Thank you.')
                break
            else:
                print('Error!')
        return None


    # 1. 显示所有商品
    def GoodsList(self):
        i = 0
        print('GoodsList:')
        for goods in self.List:
            i = i + 1
            print('No.%d:' % i)
            print(str(goods))
        return i                                                                                                        # 返回商品数量


    # 2. 添加新的商品(包括商品名称, 数量和进货价格)
    def AddGoods(self):
        i = self.GoodsList()
        print('AddGoods:')
        self.NameList.append(str(input('Name = ')))
        self.CountList.append(int(input('Count = ')))
        self.PriceList.append(int(input('Price = ')))
        self.List.append(str(Goods(self.NameList[i], self.CountList[i], self.PriceList[i])))
        return None


    # 3. 修改商品
    def ChangeGoods(self):
        print('ChangeGoods:')
        i = self.GoodsList()
        x = int(input('You want to change No.'))
        if x <= i:
            y = str(input('You want to change the '))
            if y == 'name':
                self.NameList[x - 1] = str(input('the new Name is: '))
            elif y == 'count':
                self.CountList[x - 1] = int(input('the new Count is: '))
            elif y == 'price':
                self.PriceList[x - 1] = int(input('the new Price is: '))
            else:
                print('Error!')
            self.List[x - 1] = str(Goods(self.NameList[x - 1], self.CountList[x - 1], self.PriceList[x - 1]))
            print('Change complete!')
        else:
            print('Error!')
        return None


    # 4. 删除商品
    def DelatGoods(self):
        print('DeltaGoods:')
        i= self.GoodsList()
        x = int(input('You want to delat No.'))
        if x <= i:
            self.List.pop(x - 1)
            self.NameList.pop(x - 1)
            self.CountList.pop(x - 1)
            self.PriceList.pop(x - 1)
            print('Delat complete!')
        else:
            print('Error!')
        return None


    # 5. 卖出商品
    def SaleGoods(self):
        print('SaleGoods')
        i = self.GoodsList()
        x = int(input('You want to sale No.'))
        if x <= i:
            y = int(input('You want to sale number is '))
            if y <= self.CountList[x - 1]:
                z = int(input('You want to SalePrice is '))
                self.CountList[x - 1] = self.CountList[x - 1] - y
                self.List[x - 1] = str(Goods(self.NameList[x - 1], self.CountList[x - 1], self.PriceList[x - 1]))
                self.SaleList.append(str(Goods(self.NameList[x - 1], y, self.PriceList[x - 1])))
                self.AllPrice = self.AllPrice + y * self.PriceList[x - 1]
                self.AllSalePrice = self.AllSalePrice + y * z
            else:
                print('Error!')
        return None


    # 6. 汇总当天卖出商品, 包括每种销售商品名称, 数量, 进货总价, 销售总价
    def AboveAll(self):
        print('销售商品的:')
        for goods in self.SaleList:
            print(str(goods))
        print('销售商品的进货总价: %d' % self.AllPrice)
        print('销售商品的销售总价: %d' % self.AllSalePrice)
        return None


if __name__ == '__main__':
    start = GoodsManager()
    start.Menu()