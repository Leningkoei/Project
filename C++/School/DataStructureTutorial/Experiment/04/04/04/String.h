#pragma once

class String
{
public:
	char data[26];
	int length = 0;
	~String();
	String();
	bool add_char(char new_char);
	bool add_list(char new_list[], int new_list_length);
	void display_string();
	bool get_char_index(char one_char, int &index);
	String* get_password_string(String* standard_string, String* template_string);
};

