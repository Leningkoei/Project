#include "Time.h"
#include <iostream>

using namespace std;

Time::Time(int h, int m, int s)
{
	hour = h;
	minute = m;
	second = s;
}

void display(Time& t)
{
	cout << t.hour << ":" << t.minute << ":" << t.second << endl;
}