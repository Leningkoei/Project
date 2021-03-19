#include "Complex.h"

ostream& operator<<(ostream& output, Complex& c)
{
	output << "(" << c.real << "," << c.imag << "i)";

	return output;
}

istream& operator>>(istream& input, Complex& c)
{
	cout << "Input real part and imaginary part of complex number: ";
	input >> c.real >> c.imag;

	return input;
}

Complex operator+(Complex& c1, Complex& c2)
{
	Complex c3;
	
	c3.real = c1.real + c2.real;
	c3.imag = c1.imag + c2.imag;

	return c3;
}

int main()
{
	Complex c1;
	Complex c2;
	Complex c3;
	Complex c4(4, 4);

	cout << "Input c1: ";
	cin >> c1;

	cout << "Input c2: ";
	cin >> c2;

	c3 = c1 + c2;
	c3 = c3 + c4;

	cout << "c1 = " << c1 << endl;
	cout << "c2 = " << c2 << endl;
	cout << "c3 = " << c3 << endl;

	return 0;
}