// ��1.7 ��һ��������2��������3�������е������


#include <iostream>
using namespace std;


int max(int a, int b, int c)
{
	if (b > a)
		a = b;
	if (c > a)
		a = c;
	return a;
}


int max(int a, int b)
{
	if (b > a)
		a = b;
	return a;
}


int main()
{
	int a = 7, b = -4, c = 9;
	cout << "max3 = " << max(a, b, c) << endl;
	cout << "max2 = " << max(a, b) << endl;
}