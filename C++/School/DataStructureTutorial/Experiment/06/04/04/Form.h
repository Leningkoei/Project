#pragma once

#include "Line.h"

class Form
{
public:
	Line* data[5];
	int length;
	~Form();
	Form();
	void add_line(Line* new_line);
	void display_form();
	int get_column_max(int x);
	void saddle_point();
};

