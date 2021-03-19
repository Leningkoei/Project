#pragma once

class Complex
{
private:
	double real;
	double imag;
public:
	Complex();
	Complex(double r, double i);
	Complex operator+(Complex& c2);
	void display();
};

