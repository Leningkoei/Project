#include "Student.h"
#include <iostream>

using namespace std;

Student::Student(string n, char s, int a, float sc) :
	Person(n, s, a)
{
	score = sc;
}

void Student::display()
{
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
	cout << "age: " << age << endl;
	cout << "score: " << age << endl;
}