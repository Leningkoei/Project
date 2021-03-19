#include "SqList.h"
#include <iostream>

using namespace std;

void SqList::create_list(int a[], int n)
{
	//声明变量, 初始化变量
	int i = 0;
	int j;

	//把a中的前n项复制给data
	while (i < n)
	{
		//把a的第i项复制给data的第i项
		data[i] = a[i];

		//i自增
		i++;
	}

	//data的长度 = i
	length = i;

	cout << length << endl;

	for (j = 0; j < i; j++)
	{
		cout << data[j] << endl;
	}
}