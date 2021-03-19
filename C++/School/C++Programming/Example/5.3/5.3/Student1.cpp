#include "Student1.h"
#include <iostream>

using namespace std;

void Student1::get_value1()
{
	get_value();
	cin >> age >> address;
}

void Student1::display1()
{
	display();
	cout << "age: " << age << endl;
	cout << "address: " << address << endl;
}