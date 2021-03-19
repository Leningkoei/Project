#pragma once

#include <string>

using namespace std;

class Teacher
{
protected:
	string name_teacher;
	int age;
	string title;

public:
	Teacher(string n, int a, string t);
	void display_teacher();
};

