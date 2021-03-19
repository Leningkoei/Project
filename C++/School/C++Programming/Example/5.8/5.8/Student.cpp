#include "Student.h"
#include <iostream>

using namespace std;

Student::Student(string n, char s, float sc)
{
	name_student = n;
	sex = s;
	score = sc;
}

void Student::display_student()
{
	cout << "name: " << name_student << endl;
	cout << "sex: " << sex << endl;
	cout << "score: " << score << endl;
}