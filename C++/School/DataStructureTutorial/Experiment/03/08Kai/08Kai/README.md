```flow
st=>start: QnPb.FuncKai(x, y, &no)
i0=>inputoutput: x, y, no
cond0=>condition: x or y是否超出棋盘?
cond1=>condition: x是否等于棋盘横长?
cond2=>condition: y是否等于棋盘纵长?
cond3=>condition: 本节点是否符合条件?
cond4=>condition: 本节点之后的路径是否一直是符合条件的?
cond5=>condition: 本节点的纵坐标是否和纵长相等了?
o0=>inputoutput: true
o1=>inputoutput: false
op0=>operation: 输出提示错误信息
op1=>operation: x++
op2=>operation: 将该节点push进QnPb.ans栈
op3=>operation: 将该节点pop 出QnPb.ans栈
op4=>operation: 输出此时的QnPb.ans栈
e=>end
st->i0->cond0
cond0(yes)->op0->o1->e
cond0(no)->cond1
cond1(yes)->o1->e
cond1(no)->cond2
cond2(yes)->o0->e
cond2(no)->cond3
cond3(yes)->op2->cond4
cond3(no)->op1->i0
cond4(yes)->cond5
cond4(no)->op3->op1
cond5(yes)->op4->op3->op1
cond5(no)->o1->e
```
