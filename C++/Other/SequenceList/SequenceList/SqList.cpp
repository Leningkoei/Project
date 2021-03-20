#include "SqList.h"
#include <iostream>

using namespace std;

SqList::SqList()
{
	int i;

	//��data��ʼ��Ϊȫ��0
	i = 0;
	while (i < 100)
	{
		//��0���Ƹ�data��i��
		data[i] = 0;

		//i����1
		i++;
	}
	
	//��length��ʼ��Ϊ0
	length = 0;
}

SqList::~SqList()
{
	cout << "Destructor called." << endl;
}

void SqList::creat_list(int a[], int n)
{
	//��������
	int i;
	int j;

	//��a�е�ǰn��Ƹ�data
	i = 0;
	while (i < n)
	{
		//��a�ĵ�i��Ƹ�data�ĵ�i��
		data[i] = a[i];

		//i����1
		i++;
	}

	//data�ĳ��� = i
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
	i = 0;
	while (i < length)
	{
		cout << " " << data[i];

		i++;
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

	i = 0;
	while (i < length && i != e)
	{
		i++;
	}

	if (i = length)
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
