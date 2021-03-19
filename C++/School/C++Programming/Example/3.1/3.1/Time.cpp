#include "Time.h"
#include <iostream>


void Time::set_time()
{
	cin >> hour;
	cin >> minute;
	cin >> sec;
}


void Time::show_time()
{
	cout << hour << ":" << minute << ":" << sec << endl;
}