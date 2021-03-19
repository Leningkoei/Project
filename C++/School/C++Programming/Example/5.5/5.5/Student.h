#pragma once

#include <string>

using namespace std;

class Student
{
protected:
	int num;
	string name;
	char sex;

public:
	Student(int n, string na, char s); ~Student() {}
};

