#include "Student1.h"
#include <iostream>

using namespace std;

void Student1::get_value_1()
{
	cin >> age >> addr;
}

void Student1::display_1()
{
	display();
	cout << "age: " << age << endl;
	cout << "address: " << addr << endl;
}