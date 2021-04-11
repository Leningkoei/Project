#include "Form.h"
#include <iostream>

using namespace std;

Form::~Form()
{
	cout << ">===========" << endl;
	cout << "正在删除this form" << endl;
	
	int i;

	for (i = 0; i < length; i++)
	{
		delete data[i];
	}

	cout << "删除this form了哦" << endl;
	cout << ">===========" << endl;
}

Form::Form()
{
	int i;

	for (i = 0; i < 5; i++)
	{
		data[i] = NULL;
	}
	length = 0;
}

void Form::add_line(Line* new_line)
{
	int i;
	Line* temp_line = new Line();

	for (i = 0; i < new_line->length; i++)
	{
		temp_line->add_num(new_line->data[i]);
	}
	data[length] = temp_line;
	length++;
}

void Form::display_form()
{
	cout << "this form" << endl;
	
	int i;

	for (i = 0; i < length; i++)
	{
		data[i]->display_line();
	}
}

int Form::get_column_max(int x)
{
	int column_max;
	int i;

	column_max = -9999;
	for (i = 0; i < length; i++)
	{
		if (data[i]->data[x] > column_max)
		{
			column_max = data[i]->data[x];
		}
	}

	return column_max;
}

void Form::saddle_point()
{
	int column_max;
	int i;
	int line_min;
	int line_length;
	int x;
	int y;

	line_length = data[0]->length;
	for (i = 0; i < length; i++)
	{
		line_min = data[i]->get_line_min();
		for (x = 0; x < line_length; x++)
		{
			if (data[i]->data[x] == line_min)
			{
				column_max = get_column_max(x);
				for (y = 0; y < length; y++)
				{
					if (data[y]->data[x] == column_max)
					{
						if (y == i)
						{
							cout << "this form的马鞍点是(" << x << ", " << y << ")" << endl;
						}
					}
				}
			}
		}
	}
}
