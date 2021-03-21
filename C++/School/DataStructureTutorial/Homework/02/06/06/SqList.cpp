#include "SqList.h"
#include <iostream>

using namespace std;

SqList::SqList(int list[])
{
	int i;

	i = 0;
	while (i < 10)
	{
		data[i] = list[i];
		
		i++;
	}
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

void SqList::fun0()
{
	int i;
	int j = 0;

	for (i = 0; i < length; i++)
	{
		if (data[i] < 3 || data[i] > 7)
		{
			data[j] = data[i];

			j++;
		}
	}
	length = j;
}

void SqList::fun1()
{
	int i;
	int j = 0;

	i = 0;
	while (i < length)
	{
		if (data[i] >= 3 && data[i] <= 7)
		{
			j++;
		}
		else
		{
			data[i - j] = data[i];
		}
		i++;
	}
	length -= j;
}