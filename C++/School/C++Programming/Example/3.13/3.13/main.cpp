#include "Date.h"
#include "Time.h"



int main()
{
	Time t1(10, 13, 56);
	Date d1(2004, 12, 25);
	t1.display(d1);

	return 0;
}