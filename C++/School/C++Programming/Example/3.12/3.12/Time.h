#pragma once
class Time
{
private:
	int hour;
	int minute;
	int second;
	
public:
	Time(int, int, int);
	friend void display(Time&);
};

