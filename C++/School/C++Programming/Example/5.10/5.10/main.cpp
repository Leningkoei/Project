#include "Graduate.h"

int main()
{
	Student student1(1001, "Li", 87.5);
	Graduate graduate1(2001, "Wang", 98.5, 1000);
	Student* p = &student1;

	p->display();

	p = &graduate1;

	p->display();

	return 0;
}