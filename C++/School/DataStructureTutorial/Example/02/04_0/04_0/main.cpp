#include "SqList.h"

int main()
{
	int list1[10] = { 3, 8, 2, 7, 1, 5, 3, 4, 6, 0 };
	int list2[10] = { 5, 231, 24, 4354, 451, 426, 433, 314, 6457, 73 };
	int list3[10] = { 543, 54255, 80, 4544, 452, 62, 134, 143, 5423, 3421 };
	
	SqList L1;
	SqList L2;
	SqList L3;
	
	L1.creat_list(list1);
	L1.partition1();
	L1.display_list();
	
	L2.creat_list(list2);
	L2.partition1();
	L2.display_list();
	
	L3.creat_list(list3);
	L3.partition1();
	L3.display_list();

	return 0;
}