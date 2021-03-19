// 例1.8 求3个数中最大的数(分别考虑整数, 实数, 长整数的情况)


#include <iostream>
using namespace std;


template <typename T>
T max(T a, T b, T c)
{
	if (b > a)
		a = b;
	if (c > a)
		a = c;
	return a;
}


int main()
{
	int i1 = 8, i2 = 5, i3 = 6, i;
	double d1 = 54.7, d2 = 65.6, d3 = 2415.6, d;
	long g1 = 241513, g2 = 35241, g3 = 243162, g;
	i = max(i1, i2, i3);
	d = max(d1, d2, d3);
	g = max(g1, g2, g3);
	cout << "maxint = " << i << endl;
	cout << "maxdouble = " << d << endl;
	cout << "maxlong = " << g << endl;
	return 0;
}