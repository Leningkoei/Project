// 例1.5 用cin和cout实现数据的输入输出


#include <iostream>
using namespace std;


int main()
{
	cout << "Please enter your name and age: " << endl;
	char name[10];
	int age;
	cin >> name;
	cin >> age;
	cout << "Your name is " << name << endl;
	cout << "Your age is " << age << endl;
	return 0;
}