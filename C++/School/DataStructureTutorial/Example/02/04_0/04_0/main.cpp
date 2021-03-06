#include "SqList.h"
#include <iostream>

using namespace std;

int main()
{
	int list0[10] = { 3, 8, 2, 7, 1, 5, 3, 4, 6, 0 };
	int list1[10] = { 5, 231, 24, 4354, 451, 426, 433, 314, 6457, 73 };
	int list2[10] = { 543, 54255, 80, 4544, 452, 62, 134, 143, 5423, 3421 };
	
	SqList* L0_0 = new SqList;
	SqList* L0_1 = new SqList;

	SqList* L1_0 = new SqList;
	SqList* L1_1 = new SqList;

	SqList* L2_0 = new SqList;
	SqList* L2_1 = new SqList;

	L0_0->creat_list(list0);
	L0_0->partition1();
	cout << "way 0:" << endl;
	L0_0->display_list();
	delete L0_0;

	cout << endl;
	
	L0_1->creat_list(list0);
	L0_1->partition2();
	cout << "way 1:" << endl;
	L0_1->display_list();
	delete L0_1;

	cout << endl;
	
	L1_0->creat_list(list1);
	L1_0->partition1();
	cout << "way 0:" << endl;
	L1_0->display_list();
	delete L1_0;

	cout << endl;

	L1_1->creat_list(list1);
	L1_1->partition2();
	cout << "way 1:" << endl;
	L1_1->display_list();
	delete L1_1;
	
	cout << endl;

	L2_0->creat_list(list2);
	L2_0->partition1();
	cout << "way 0:" << endl;
	L2_0->display_list();
	delete L2_0;

	cout << endl;

	L2_1->creat_list(list2);
	L2_1->partition2();
	cout << "way 1:" << endl;
	L2_1->display_list();
	delete L2_1;

	return 0;
}