#pragma once

#include "Time.h"
#include <iostream>

using namespace std;

class Time;

class Date
{
private:
	int year;
	int month;
	int day;

public:
	Date(int, int, int);
	friend void Time::display(Date& d);
};

