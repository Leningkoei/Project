# 实验三 - 2 - P310 # 8-1
# 编写一个程序, 使用正则表达式校验输入的手机号是否正确
# 中国电信号段: 133 149 153 173 177 180 181 189 199
# 中国联通号段: 130 131 132 145 155 156 166 175 176 185 186
# 中国移动号段: 134 135 136 137 138 139 147 150 151 152 157 158 159 178 182 183 184 187 188 198


import re


def main():
    tel =In()
    flag = Flag(tel)
    Out(flag)


# 输入手机号
def In():
    tel = input('tel = ')
    return tel


# 判断手机号格式是否正确
def Flag(tel):
    res = re.match(r'^1[3-9]\d{9}$', tel)
    flag = 0
    if res != None:
        flag = 1
    return flag


# 输出结果
def Out(flag):
    if flag == 1:
        print('OK')
    else:
        print('Error')
    return None

if __name__ == '__main__':
    main()