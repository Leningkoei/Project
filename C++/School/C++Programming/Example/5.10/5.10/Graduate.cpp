#include "Graduate.h"
#include <iostream>

using namespace std;

Graduate::Graduate(int n, string na, float s, float w) :
	Student(n, na, s)
{
	wage = w;
}

void Graduate::display()
{
	Student::display();
	cout << "wage: " << wage << endl;
}