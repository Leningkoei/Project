#pragma once
using namespace std;


class Time
{
private:
	int hour;
	int minute;
	int sec;
public:
	Time()
	{
		hour = 0;
		minute = 0;
		sec = 0;
	}
	void set_time();
	void show_time();
};

