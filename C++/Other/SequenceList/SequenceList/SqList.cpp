#include "SqList.h"
#include <iostream>

using namespace std;

void SqList::create_list(int a[], int n)
{
	//��������, ��ʼ������
	int i = 0;
	int j;

	//��a�е�ǰn��Ƹ�data
	while (i < n)
	{
		//��a�ĵ�i��Ƹ�data�ĵ�i��
		data[i] = a[i];

		//i����
		i++;
	}

	//data�ĳ��� = i
	length = i;

	cout << length << endl;

	for (j = 0; j < i; j++)
	{
		cout << data[j] << endl;
	}
}