#include "SqList.h"
#include <iostream>

using namespace std;

SqList::SqList()
{
	int i;

	//把data初始化为全为0
	for (i = 0; i < 100; i++)
	{
		//把0复制给data第i项
		data[i] = 0;
	}
	
	//将length初始化为0
	length = 0;
}

SqList::~SqList()
{
	cout << "Destructor called." << endl;
}

void SqList::creat_list(int a[], int n)
{
	//声明变量
	int i;

	//把a中的前n项复制给data
	for (i = 0; i < n; i++)
	{
		//把a的第i项复制给data的第i项
		data[i] = a[i];
	}

	//data的长度 = i
	length = i;
}

bool SqList::list_empty()
{
	if (length == 0)
	{
		return true;
	}

	else
	{
		return false;
	}
}

int SqList::list_length()
{
	return length;
}

void SqList::display_list()
{
	int i;

	cout << "data =";
	for (i = 0; i < length; i++)
	{
		cout << " " << data[i];
	}
	cout << endl;
}

bool SqList::get_elem(int i, int& e)
{
	if (i < 0 || i >= length)
	{
		return false;
	}

	else
	{
		e = data[i];
		
		return true;
	}
}

int SqList::locate_elem(int e)
{
	int i;

	for (i = 0; i < length && i != e; i++)
	{
		//
	}

	if (i == length)
	{
		return 0;
	}

	else
	{
		return i;
	}
}

bool SqList::list_insert(int i, int e)
{
	int j;

	if (i < 0 || i >= length)
	{
		return false;
	}

	else
	{
		for (j = length; j > i; j--)
		{
			data[j] = data[j - 1];
		}

		data[i] = e;
		
		length++;

		return true;
	}
}

bool SqList::list_delete(int i, int& e)
{
	int j;

	if (i < 0 || i >= length)
	{
		return false;
	}

	else
	{
		e = data[i];

		for (j = i; j < length - 1; j++)
		{
			data[j] = data[j + 1];
		}

		length--;

		return true;
	}
}
