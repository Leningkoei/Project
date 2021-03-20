#include "SqList.h"

int main()
{
	int a[5] = { 1, 2, 3, 4, 5 };

	SqList L1;

	L1.creat_list(a, 4);
	L1.display_list();

	return 0;
}