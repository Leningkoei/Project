#pragma once

#include "Person.h"

class Teacher :
	virtual public Person
{
protected:
	string title;

public:
	Teacher(string n, char s, int a, string t);
	void display();
};

