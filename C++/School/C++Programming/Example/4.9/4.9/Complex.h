#pragma once

class Complex
{
private:
	double real;
	double imag;

public:
	Complex();
	Complex(double r, double i);
	operator double();
};

