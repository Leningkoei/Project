#include "Stack.h"
#include <iostream>

using namespace std;

int main()
{
	int n;
	int arrive_time;
	int left_time;
	//	�½�ͣ����
	Stack* stack0 = new Stack();

	//	��������ͣ����, ����ʱ��Ϊarrive_time
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
	//	������n�������뿪ͣ����, �뿪ʱ��Ϊleft_time
	n = 5;
	left_time = 7;
	stack0->left(n, left_time);
	n = 4;
	left_time = 5;
	stack0->left(n, left_time);
	//	��������ͣ����, ����ʱ��Ϊarrive_time
	arrive_time = 3;
	stack0->push(arrive_time);
	//	������n�������뿪ͣ����, �뿪ʱ��Ϊleft_time
	n = 6;
	left_time = 21;
	stack0->left(n, left_time);
	//	��ѯ��ͣ��ͣ�����ĳ���
	stack0->display_stack();
	//	ɾ��ͣ����
	delete stack0;

	return 0;
}
