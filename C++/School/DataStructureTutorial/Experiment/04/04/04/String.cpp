#include "String.h"
#include <iostream>

using namespace std;

String::~String()
{
	cout << "É¾³ýthis stringÁËÅ¶" << endl;
}

String::String()
{
	int i;

	for (i = 0; i < 26; i++)
	{
		data[i] = '0';
	}
	length = 0;
}

bool String::add_char(char new_char)
{
	if (length >= 26)
	{
		return false;
	}
	data[length] = new_char;
	length++;
	return true;
}

bool String::add_list(char new_list[], int new_list_length)
{
	int i;

	if (length + new_list_length > 26)
	{
		return false;
	}
	for (i = 0; i < new_list_length; i++)
	{
		add_char(new_list[i]);
	}
	return true;
}

void String::display_string()
{
	cout << "this string: ";

	int i;

	for (i = 0; i < length; i++)
	{
		cout << "'";
		cout << data[i];
		cout << "'";
	}

	cout << endl;
}

bool String::get_char_index(char one_char, int &index)
{
	int i;

	for (i = 0; i < length; i++)
	{
		if (data[i] == one_char)
		{
			index = i;
			return true;
		}
	}
	return false;
}

String* String::get_password_string(String* standard_string, String* template_string)
{
	int i;
	int index;
	char password_char;
	String* password_string = new String();

	for (i = 0; i < length; i++)
	{
		standard_string->get_char_index(data[i], index);
		password_char = template_string->data[index];
		password_string->add_char(password_char);
	}

	return password_string;
}
