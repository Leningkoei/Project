#include "Time.h"
#include <iostream>

using namespace std;

Time::Time()
{
	minute = 0;
	second = 0;
}

Time::Time(int m, int s)
{
	minute = m;
	second = s;
}

void Time::display()
{
	cout << minute << ":" << second << endl;
}