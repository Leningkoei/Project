#include "Complex.h"
#include <iostream>

using namespace std;

int main()
{
	Complex c1(3, 4);
	Complex c2(5, -10);
	Complex c3;
	double d;

	d = 2.5 + c1;
	cout << d << endl;

	return 0;
}