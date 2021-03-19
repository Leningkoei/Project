#pragma once

#include <iostream>

using namespace std;

class Complex
{
private:
	double real;
	double imag;

public:
	friend ostream& operator<<(ostream& output, Complex& c);
	friend istream& operator>>(istream& input, Complex& c);
	friend Complex operator+(Complex& c1, Complex& c2);
	Complex();
	Complex(double r, double i);
};

