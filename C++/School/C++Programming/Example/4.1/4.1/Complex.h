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
	Complex complex_add(Complex& c2);
	void display();
};

