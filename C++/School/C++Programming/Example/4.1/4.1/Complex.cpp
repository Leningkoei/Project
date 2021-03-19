#include "Complex.h"

Complex::Complex()
{
	real = 0;
	imag = 0;
}

Complex::Complex(double r, double i)
{
	real = r;
	imag = i;
}

Complex Complex::complex_add(Complex& c2)
{
	Complex c3;
	c3.real = real + c2.real;
	c3.imag = imag + c2.imag;
	
	return c3;
}

void Complex::display()
{
	cout << "(" << real << "," << imag << "i)" << endl;
}