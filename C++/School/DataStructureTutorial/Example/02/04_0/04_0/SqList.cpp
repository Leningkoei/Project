#include "SqList.h"
#include <iostream>

using namespace std;

SqList::SqList()
{
	int i;

	i = 0;
	while (i < 10)
	{
		data[i] = 0;

		i++;
	}

	length = 0;
}

SqList::~SqList()
{
	cout << "SqList is destoried" << endl;
}

void SqList::creat_list(int list[])
{
	int i;
	
	i = 0;
	while (i < 10)
	{
		data[i] = list[i];

		i++;
	}

	length = i;
}

void SqList::display_list()
{
	int i;

	cout << "data = [";
	i = 0;
	while (i < length)
	{
		cout << " " << data[i];

		i++;
	}
	cout << " ]" << endl;
}

void SqList::partition1()
{
	int i;
	int j;
	int pivot = data[0];

	i = 0;
	j = length - 1;
	while (i < j)
	{
		while (i < j && data[j] > pivot)
		{
			j--;
		}
		while (i < j && data[i] <= pivot)
		{
			i++;
		}

		if (i < j)
		{
			swap(data[i], data[j]);
		}
	}

	if (i != 0)
	{
		swap(data[0], data[i]);
	}
}