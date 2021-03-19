#include <iostream>
#include "student.h"



void Student::set()
{
	cout << "num = ";
	cin >> num;
	cout << "name = ";
	cin >> name;
	cout << "sex = ";
	cin >> sex;
	return;
}


void Student::display()
{
	cout << "num: " << num << endl;
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
	return;
}