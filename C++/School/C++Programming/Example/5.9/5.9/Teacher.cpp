#include "Teacher.h"
#include <iostream>

using namespace std;

Teacher::Teacher(string n, char s, int a, string t) :
	Person(n, s, a)
{
	title = t;
}

void Teacher::display()
{
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
	cout << "age: " << age << endl;
	cout << "title: " << title << endl;
}