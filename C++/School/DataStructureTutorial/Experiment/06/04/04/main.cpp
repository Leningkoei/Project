#include "Form.h"
#include <iostream>

using namespace std;

int main()
{
	Line* line0 = new Line();
	Line* line1 = new Line();
	Line* line2 = new Line();
	Form* form0 = new Form();

	int new_list0[] = { 0, 1, 2, 0 };
	line0->add_list(new_list0, 4);
	int new_list1[] = { 4, 3, 4, 3 };
	line1->add_list(new_list1, 4);
	int new_list2[] = { 5, 3, 4, 3 };
	line2->add_list(new_list2, 4);
	form0->add_line(line0);
	form0->add_line(line1);
	form0->add_line(line2);
	form0->display_form();

	form0->saddle_point();

	delete form0;
	delete line0;
	delete line1;
	delete line2;

	return 0;
}
