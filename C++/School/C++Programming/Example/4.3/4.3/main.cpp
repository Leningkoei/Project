#include "Complex.h"
#include <iostream>

using namespace std;

Complex operator+(Complex& c1, Complex& c2)
{
	Complex c3;
	c3.real = c1.real + c2.real;
	c3.imag = c1.imag + c2.imag;

	return c3;
}

int main()
{
	Complex c1(3, 4);
	Complex c2(5, -10);
	Complex c3;
	c3 = c1 + c2;
	cout << "c1 = ";
	c1.display();
	cout << "c2 = ";
	c2.display();
	cout << "c3 = ";
	c3.display();

	return 0;
}