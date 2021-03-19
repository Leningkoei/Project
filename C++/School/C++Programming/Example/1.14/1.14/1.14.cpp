// 例1.14 局部变量和全局变量同名


#include <iostream>
using namespace std;


float a = 13.5;


int main()
{
	int a = 5;
	cout << a << endl;
	cout << ::a << endl;
	return 0;
}