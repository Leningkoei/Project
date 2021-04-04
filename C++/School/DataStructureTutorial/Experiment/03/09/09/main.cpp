#include "Stack.h"
#include <iostream>

using namespace std;

int main()
{
	int n;
	int arrive_time;
	int left_time;
	//	新建停车场
	Stack* stack0 = new Stack();

	//	车车进入停车场, 到达时间为arrive_time
	arrive_time = 10;
	stack0->push(arrive_time);
	arrive_time = 2;
	stack0->push(arrive_time);
	arrive_time = 5;
	stack0->push(arrive_time);
	arrive_time = 6;
	stack0->push(arrive_time);
	arrive_time = 32;
	stack0->push(arrive_time);
	arrive_time = 43;
	stack0->push(arrive_time);
	arrive_time = 3;
	stack0->push(arrive_time);
	//	倒数第n辆车车离开停车场, 离开时间为left_time
	n = 5;
	left_time = 7;
	stack0->left(n, left_time);
	n = 4;
	left_time = 5;
	stack0->left(n, left_time);
	//	车车进入停车场, 到达时间为arrive_time
	arrive_time = 3;
	stack0->push(arrive_time);
	//	倒数第n辆车车离开停车场, 离开时间为left_time
	n = 6;
	left_time = 21;
	stack0->left(n, left_time);
	//	查询还停在停车场的车车
	stack0->display_stack();
	//	删除停车场
	delete stack0;

	return 0;
}
