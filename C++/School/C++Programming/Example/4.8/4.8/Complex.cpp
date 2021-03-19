#include "Complex.h"

Complex::Complex()
{
	real = NULL;
	imag = NULL;
}

Complex::Complex(double r, double i)
{
	real = r;
	imag = i;
}