#include "Complex.h"

int main()
{
	Complex c1(3, 4);
	Complex c2(5, -10);
	Complex c3;
	Complex c4;
	c3 = c1.complex_add(c2);
	cout << "c1 = ";
	c1.display();
	cout << "c2 = ";
	c2.display();
	cout << "c1 + c2 = ";
	c3.display();
	cout << "c4 = ";
	c4.display();

	return 0;
}