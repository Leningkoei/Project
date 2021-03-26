#include "SqList.h"

int main()
{
	int a[5] = { 0, 1, 2, 3, 4 };
	int b[5] = { 0, 0, 0, 0, 1 };
	SqList list0;
	SqList list1;

	list0.creat_list(a, 5);
	list0.change_node_0();
	list0.display_list();

	list1.creat_list(b, 5);
	list1.change_node_1();
	list1.display_list();

	return 0;
}
