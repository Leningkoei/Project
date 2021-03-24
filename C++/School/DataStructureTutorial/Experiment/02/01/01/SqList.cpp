#include "SqList.h"
#include <iostream>

using namespace std;

SqList::SqList()
{
	int i;

	for (i = 0; i < 5; i++)
	{
		data[i] = '0';
	}
	length = 0;
}

SqList::~SqList()
{
	cout << "É¾³ýË³Ðò±íÁËÅ¶" << endl;
}

void SqList::creat_list(char a[], int n)
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

	cout << "this list =";
	for (i = 0; i < length; i++)
	{
		cout << " " << data[i];
	}
	cout << endl;
}

int SqList::list_length()
{
	return length;
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

bool SqList::get_elem(int i, char& e)
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

int SqList::locate_elem(char e)
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

bool SqList::node_insert(int i, char e)
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

bool SqList::node_delete(int i, char& e)
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
