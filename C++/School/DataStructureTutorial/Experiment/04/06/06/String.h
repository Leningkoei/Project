#pragma once

class String
{
private:
	char data[20];
	int length;
	int* get_next_j();

public:
	~String();
	String();
	void add_char(char new_char);
	void add_list(char new_list[], int new_list_length);
	void display_string();
	int kmp_short_string(String* long_string);
};
void display_space(int num);

