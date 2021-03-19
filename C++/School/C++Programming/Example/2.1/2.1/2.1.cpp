// 例2.1 用类来实现输入和输出时间(时:分:秒)


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
	Time t1;
	cin >> t1.hour;
	cin >> t1.minute;
	cin >> t1.sec;
	cout << t1.hour << ":" << t1.minute << ":" << t1.sec << endl;
	return 0;
}