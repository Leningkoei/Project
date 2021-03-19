// 例2.2 用类来实现输入和输出时间(时:分:秒), 定义多个类对象, 分别输入和输出各对象中的时间

#include <iostream>
using namespace std;


class Time
{
public:
	int hour;
	int minute;
	int sec;
};


int main()
{
	void set_time(Time&);
	void show_time(Time&);
	Time t1;
	Time t2;
	set_time(t1);
	set_time(t2);
	show_time(t1);
	show_time(t2);
	return 0;
}


void set_time(Time& t)
{
	cin >> t.hour;
	cin >> t.minute;
	cin >> t.sec;
	return;
}


void show_time(Time& t)
{
	cout << t.hour << ":" << t.minute << ":" << t.sec << endl;
	return;
}