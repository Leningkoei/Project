#include "Time.h"
#include "main.h"


Time::Time(int h, int m, int s)
{
	hour = h;
	minute = m;
	sec = s;
	return;
}


void Time::get_time()
{
	cout << hour << ":" << minute << ":" << sec << endl;
	return;
}