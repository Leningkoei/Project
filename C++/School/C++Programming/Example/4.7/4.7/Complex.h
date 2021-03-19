#pragma once

#include <iostream>

using namespace std;

class Complex
{
private:
	double real;
	double imag;

public:
	Complex();
	Complex(double r, double i);
	friend Complex operator+(Complex& c1, Complex& c2);
	friend ostream& operator<<(ostream& output, Complex& c);
};

