#include "Person.h"
#include <iostream>

using namespace std;

Person::Person(string n, char s, int a)
{
	name = n;
	sex = s;
	age = a;
}

void Person::display()
{
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
	cout << "age: " << age << endl;
}