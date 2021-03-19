#pragma once

#include "Person.h"

class Student :
	virtual public Person
{
protected:
	float score;

public:
	Student(string n, char s, int a, float sc);
	void display();
};

