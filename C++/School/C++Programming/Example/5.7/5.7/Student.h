#pragma once

#include <string>

using namespace std;

class Student
{
private:
	int num;
	string name;

public:
	Student(int n, string na);
	void display();
};

