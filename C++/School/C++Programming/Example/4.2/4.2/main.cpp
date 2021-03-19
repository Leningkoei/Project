#include "Complex.h"
#include <iostream>

using namespace std;

int main()
{
	Complex c1(1.1, 2.2);
	Complex c2(3.3, -4.4);
	Complex c3;
	c3 = c1 + c2; //= c1.operator+(c2)
	cout << "c1 = ";
	c1.display();
	cout << "c2 = ";
	c2.display();
	cout << "c1 + c2 = ";
	c3.display();

	return 0;
}