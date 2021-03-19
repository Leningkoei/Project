#pragma once

#include <string>

using namespace std;

class Person
{
protected:
	string name;
	char sex;
	int age;

public:
	Person(string n, char s, int a);
	void display();
};

