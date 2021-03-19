// 例2.3 用含成员函数的类来实现输入和输出时间(时:分:秒), 定义多个类对象, 分别输入和输出多个对象中的时间


#include <iostream>
using namespace std;


class Time
{
private:
	int hour;
	int minute;
	int sec;
public:
	void set_time();
	void show_time();
};


int main()
{
	Time t1;
	Time t2;
	t1.set_time();
	t2.set_time();
	t1.show_time();
	t2.show_time();
	return 0;
}


void Time::set_time()
{
	cin >> hour;
	cin >> minute;
	cin >> sec;
	return;
}


void Time::show_time()
{
	cout << hour << ":" << minute << ":" << sec << endl;
	return;
}