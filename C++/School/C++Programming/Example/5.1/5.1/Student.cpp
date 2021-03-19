#include "Student.h"
#include <iostream>

using namespace std;

void Student::get_value()
{
	cin >> num >> name >> sex;
}

void Student::display()
{
	cout << "num: " << num << endl;
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
}