#pragma once

#include "Student.h"
#include "Teacher.h"

class Graduate :
	public Student, public Teacher
{
private:
	float wage;

public:
	Graduate(string n_t, int a, string t, string n_s, char s, float sc, float w);
	void display_graduate();
};

