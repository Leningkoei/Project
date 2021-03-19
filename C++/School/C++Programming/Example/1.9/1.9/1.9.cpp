// 例1.9 了解引用和变量的关系


#include <iostream>
using namespace std;


int main()
{
	int a = 10;
	int& b = a;
	a = a * a;
	cout << a << b;
	b = b / 5;
	cout << b << a;
	return 0;
}