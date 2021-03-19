#include "Student.h"
#include <iostream>

using namespace std;

void Student::get_value()
{
	cout << "num = ";
	cin >> num;
	cout << "name = ";
	cin >> name;
	cout << "sex = ";
	cin >> sex;
}

void Student::display()
{
	cout << "num: " << num << endl;
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
}