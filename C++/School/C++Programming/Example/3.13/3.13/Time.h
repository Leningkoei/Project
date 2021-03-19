#pragma once

class Date;

class Time
{
private:
	int hour;
	int minute;
	int second;

public:
	Time(int, int, int);
	void display(Date&);
};

