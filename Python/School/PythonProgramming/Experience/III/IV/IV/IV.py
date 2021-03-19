# 实验三 - 4 - P312 # 10-1
# 编程实现如下功能:
# (1) 定义一个利用列表实现队列的类List_Queue, 可以实现队列元素进入, 删除, 求队列长度等功能
#   1. 进入列菜单
#   2. 输入0退出
#   3. 输入1列出当前元素
#   4. 输入2添加元素
#   5. 输入3删除元素
#   6. 输入4求队列长度
#   7. 队列: '名字'
# (2) 定义一个异常处理类List_Queue_Exception对类List_Queue中可能出现的异常进行处理


def main():
    manager = List_Queue()
    manager.Menu()
    manager.Flag()
    return None


class Mumber:


    def __init__(self, name):
        self.name = name
        return None


    def __str__(self):
        return 'name : %s' % self.name


class List_Queue:


    Num = 0
    List = []


    # Menu
    def Menu(self):
        print('Welcome!')
        print('Input 0 to Exit.')
        print('Input 1 to Print.')
        print('Input 2 to Add.')
        print('Input 3 to Delat')
        print('Input 4 to Length')
        return None


    # Flag
    def Flag(self):
        while(True):
            print('-----------------------------------------------------------------------------------------------------')
            flag = int(input('Flag = '))
            if flag == 0:
                print('Thank you')
                break
            elif flag == 1:
                print('Print the Queue List:')
                self.Print()
            elif flag == 2:
                print('Add the new member:')
                self.Add()
            elif flag == 3:
                print('Delat the member:')
                self.Delat()
            elif flag == 4:
                print('The Length of the Queue:')
                self.Length()
            else:
                print('Error!')
        return None


    # Print
    def Print(self):
        i = 0
        for member in self.List:
            i = i + 1
            print('No.%d: %s' % (i, member))
        return None

    
    # Add
    def Add(self):
        name = str(input('name: '))
        self.List.append(Mumber(name))
        self.Num = self.Num + 1
        print('Add new mamber complete!')
        return None


    # Delat
    def Delat(self):
        print('The Queue List is:')
        self.Print()
        num = int(input('You want to delat No.'))
        if num <= self.Num:
            self.List.pop(num - 1)
            self.Num = self.Num - 1
            print('Delat the member complete!')
        else:
            print('Error!')
        return None


    # Length
    def Length(self):
        print('The Length of the Queue is %d' % self.Num)
        return None


if __name__ == '__main__':
    main()