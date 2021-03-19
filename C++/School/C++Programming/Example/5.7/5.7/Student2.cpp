#include "Student2.h"
#include <iostream>

using namespace std;

Student2::Student2(int n, string na, int a, int s) :
	Student1(n, na, a)
{
	score = s;
}

void Student2::display2()
{
	display1();
	cout << "score: " << score << endl;
}