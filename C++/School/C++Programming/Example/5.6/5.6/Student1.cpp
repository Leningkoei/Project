#include "Student1.h"
#include <iostream>

using namespace std;

Student1::Student1(int n, string na, int n1, string na1, int a, string ad) :
	Student(n, na), monitor(n1, na1)
{
	age = a;
	address = ad;
}

void Student1::display1()
{
	cout << "This student is: " << endl;
	display();
	cout << "age: " << age << endl;
	cout << "address: " << address << endl;
}

void Student1::display_monitor()
{
	cout << endl;
	cout << "Class monitor is: " << endl;
	monitor.display();
}