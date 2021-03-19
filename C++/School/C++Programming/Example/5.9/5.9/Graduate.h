#pragma once

#include "Student.h"
#include "Teacher.h"

class Graduate :
	public Student, public Teacher
{
private:
	float wage;

public:
	Graduate(string n, char s, int a, string t, float sc, float w);
	void display();
};

