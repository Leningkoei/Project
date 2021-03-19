#pragma once

class Complex
{
private:
	double real;
	double imag;

public:
	Complex();
	Complex(double r, double i);
	friend Complex operator+(Complex& c1, Complex& c2);
	void display();
};

