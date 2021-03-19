#include "Student.h"
#include <iostream>

using namespace std;

Student::Student(int n, string na, float s)
{
	num = n;
	name = na;
	score = s;
}

void Student::display()
{
	cout << "num: " << num << endl;
	cout << "name: " << name << endl;
	cout << "score: " << score << endl;
}