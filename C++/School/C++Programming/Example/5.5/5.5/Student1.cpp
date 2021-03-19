#include "Student1.h"
#include <iostream>

using namespace std;

Student1::Student1(int n, string na, char s, int a, string ad) :Student(n, na, s)
{
	age = a;
	address = ad;
}

void Student1::display()
{
	cout << "num: " << num << endl;
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
	cout << "age: " << age << endl;
	cout << "address: " << address << endl;
}