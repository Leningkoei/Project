#include "Date.h"

Date::Date(int y, int m, int d)
{
	year = y;
	month = m;
	day = d;
}

void Time::display(Date& d)
{
	cout << d.year << "/" << d.month << "/" << d.day << endl;
	cout << hour << ":" << minute << ":" << second << endl;
}