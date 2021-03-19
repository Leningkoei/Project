// 例1.13 将函数指定为内置函数


#include <iostream>
using namespace std;


inline int max(int a, int b, int c)
{
	if (b > a)
		a = b;
	if (c > a)
		a = c;
	return a;
}


int main()
{
	int i = 7, j = 10, k = 25, m;
	m = max(i, j, k);
	cout << "max = " << m << endl;
	return 0;
}