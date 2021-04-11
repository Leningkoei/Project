#include "Line.h"
#include <iostream>

using namespace std;

Line::~Line()
{
	cout << "É¾³ýthis lineÁËÅ¶" << endl;
}

Line::Line()
{
	int i;

	for (i = 0; i < 5; i++)
	{
		data[i] = 0;
	}
	length = 0;
}

void Line::add_num(int new_num)
{
	data[length] = new_num;
	length++;
}

void Line::add_list(int new_list[], int new_list_length)
{
	int i;
	if (new_list_length <= 5)
	{
		for (i = 0; i < new_list_length; i++)
		{
			data[i] = new_list[i];
		}
	}
	length += new_list_length;
}

void Line::display_line()
{
	int i;

	for (i = 0; i < length; i++)
	{
		cout << data[i] << " ";
	}
	cout << endl;
}

int Line::get_line_min()
{
	int i;
	int line_min = 9999;

	for (i = 0; i < length; i++)
	{
		if (data[i] < line_min)
		{
			line_min = data[i];
		}
	}

	return line_min;
}
