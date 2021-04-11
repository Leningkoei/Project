#pragma once

class Line
{
public:
	int data[5];
	int length;
	~Line();
	Line();
	void add_num(int new_num);
	void add_list(int new_list[], int new_list_length);
	void display_line();
	int get_line_min();
};

