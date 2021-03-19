#pragma once

#include "Student.h"

class Graduate :
	public Student
{
private:
	float wage;

public:
	Graduate(int n, string na, float score, float wage);
	void display();
};

