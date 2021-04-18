#include "String.h"
#include <iostream>

using namespace std;

String::~String()
{
	cout << "删除this string了哦" << endl;
}

String::String()
{
	int i;

	for (i = 0; i < 20; i++)
	{
		data[i] = '0';
	}
	length = 0;
}

int* String::get_next_j()
{
	int j;
	int k;
	static int next_j_list[20];

	for (j = 0, k = -1, next_j_list[0] = -1; j < length;)
	{
		if (k == -1 || data[j] == data[k])
		{
			j++;
			k++;
			if (data[j] != data[k])
			{
				next_j_list[j] = k;
			}
			else
			{
				next_j_list[j] = next_j_list[k];
			}
		}
		else
		{
			k = next_j_list[k];
		}
	}

	return next_j_list;
}

void String::add_char(char new_char)
{
	if (length == 20)
	{
		cout << "超出界限" << endl;
		exit(11451400);
	}
	else
	{
		data[length] = new_char;
		length++;
	}
}

void String::add_list(char new_list[], int new_list_length)
{
	if (length + new_list_length >= 20)
	{
		cout << "超出界限" << endl;
		exit(11451401);
	}
	else
	{
		int i;

		for (i = 0; i < new_list_length; i++)
		{
			add_char(new_list[i]);
		}
	}
}

void String::display_string()
{
	int i;

	for (i = 0; i < length; i++)
	{
		cout << data[i];
	}

	cout << endl;
}

int String::kmp_short_string(String* long_string)
{
	int i;
	int j;
	int n;
	int* next_j_list;

	for (i = 0, j = 0, n = 0, next_j_list = get_next_j(); i < long_string->length;)
	{
		if (j == -1 || long_string->data[i] == data[j])
		{
			i++;
			j++;
			if (j != 0)
			{
				long_string->display_string();
				display_space(i - 1);
				cout << "|" << endl;
				display_space(i - j);
				display_string();
				cout << "============" << endl;
			}
		}
		else
		{
			long_string->display_string();
			display_space(i - 1);
			cout << ">|<" << endl;
			display_space(i - j);
			display_string();
			cout << "============" << endl;
			j = next_j_list[j];
		}
		if (j == length)
		{
			n++;

			j = 0;
		}
	}
	
	return n;
}

void display_space(int num)
{
	int i;

	for (i = 0; i < num; i++)
	{
		cout << " ";
	}
}
