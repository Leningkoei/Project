#include "Student.h"
#include <iostream>

using namespace std;

Student::Student(int n, string na)
{
	num = n;
	name = na;
}

void Student::display()
{
	cout << "num: " << num << endl;
	cout << "name: " << name << endl;
}