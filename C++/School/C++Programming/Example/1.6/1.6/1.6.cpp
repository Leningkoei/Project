// 例1.6 求3个数中最大的数(分别考虑整数, 实数, 长整数的情况)


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


float max(float a, float b, float c)
{
	if (b > a)
		a = b;
	if (c > a)
		a = c;
	return a;
}


long max(long a, long b, long c)
{
	if (b > a)
		a = b;
	if (c > a)
		a = c;
	return a;
}


int main()
{
	int a, b, c, l;
	float d, e, f, m;
	long g, h, i, n;
	cin >> a >> b >> c;
	cin >> d >> e >> f;
	cin >> g >> h >> i;
	l = max(a, b, c);
	m = max(d, e, f);
	n = max(g, h, i);
	cout << "maxint = " << l << endl;
	cout << "maxfloat = " << m << endl;
	cout << "maxlong = " << n << endl;
}