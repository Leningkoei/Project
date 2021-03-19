# 实验三 - 1 - P310 # 7-1
# 使用Turtle模块绘制一个五角星
import turtle


def main():
    # 画笔属性
    turtle.pensize(1)
    turtle.pencolor('red')
    turtle.speed(5)


    # 绘图过程
    turtle.forward(216)      # 第1条边
    turtle.left(216)
    turtle.forward(216)      # 第2条边
    turtle.left(216)
    turtle.forward(216)      # 第3条边
    turtle.left(216)
    turtle.forward(216)      # 第4条边
    turtle.left(216)
    turtle.forward(216)      # 第5条边


    turtle.exitonclick()    # 点击图形界面后结束程序


    return None


if __name__ == '__main__':
    main()