#pragma once

#include <string>

using namespace std;

class Student
{
protected:
	string name_student;
	char sex;
	float score;

public:
	Student(string n, char s, float sc);
	void display_student();
};

