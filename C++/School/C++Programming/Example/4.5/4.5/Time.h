#pragma once

class Time
{
private:
	int minute;
	int second;

public:
	Time();
	Time(int m, int s);
	friend Time operator++(Time& time);
	void display();
};

