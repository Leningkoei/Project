#include "SqList.h"
#include <iostream>

using namespace std;

SqList::~SqList()
{
	cout << "É¾³ýthis listÁËÅ¶" << endl;
}

SqList::SqList()
{
	int i;

	for (i = 0; i < 5; i++)
	{
		data[i] = 0;
	}
	length = 0;
}

void SqList::creat_list(int a[], int n)
{
	int i;

	for (i = 0; i < n; i++)
	{
		data[i] = a[i];
	}
	length = i;
}

void SqList::display_list()
{
	int i;

	cout << "data = {";
	for (i = 0; i < length; i++)
	{
		cout << " " << data[i];
	}
	cout << " }" << endl;
}

void SqList::change_node_0()
{
	int p;
	int q;

	for (p = 0, q = length - 1; p != q;)
	{
		for (; p < q && data[q] % 2 == 0; q--);
		for (; p < q && data[p] % 2 == 1; p++);
		if (p < q)
		{
			swap(data[p], data[q]);
		}
	}
}

void SqList::change_node_1()
{
	int p;
	int q;

	for (p = -1, q = 0; q < length; q++)
	{
		if (data[q] % 2 == 1)
		{
			p++;
			if (p != q)
			{
				swap(data[p], data[q]);
			}
		}
	}
}
