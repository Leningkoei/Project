#include "Teacher.h"
#include <iostream>

using namespace std;

Teacher::Teacher(string n, int a, string t)
{
	name_teacher = n;
	age = a;
	title = t;
}

void Teacher::display_teacher()
{
	cout << "name: " << name_teacher << endl;
	cout << "age: " << age << endl;
	cout << "title: " << title << endl;
}