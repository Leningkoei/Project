#include "SqList.h"

int main()
{
	int list0[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };

	SqList L0(list0);
	L0.fun0();
	L0.display_list();

	SqList L1(list0);
	L1.fun1();
	L1.display_list();

	return 0;
}