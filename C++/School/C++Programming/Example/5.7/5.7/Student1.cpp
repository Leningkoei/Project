#include "Student1.h"
#include <iostream>

using namespace std;

Student1::Student1(int n, string na, int a) :
	Student(n, na)
{
	age = a;
}

void Student1::display1()
{
	display();
	cout << "age: " << age << endl;
}