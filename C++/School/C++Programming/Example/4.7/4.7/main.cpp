#include "Complex.h"

Complex operator+(Complex& c1, Complex& c2)
{
	Complex c3;
	c3.real = c1.real + c2.real;
	c3.imag = c1.imag + c2.imag;

	return c3;
}

ostream& operator<<(ostream& output, Complex& c)
{
	output << "(" << c.real << "," << c.imag << "i)" << endl;

	return output;
}

int main()
{
	Complex c1(2, 4);
	Complex c2(6, 10);
	Complex c3;
	c3 = c1 + c2;
	cout << c3;

	return 0;
}