#include "Time.h"
#include "main.h"


int main()
{
	Time t1(10, 13, 56);
	int* p1 = &t1.hour;
	cout << *p1 << endl;
	t1.get_time();
	Time* p2 = &t1;
	p2->get_time();
	void (Time:: * p3)();
	p3 = &Time::get_time;
	(t1.*p3)();
	return 0;
}