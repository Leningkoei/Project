#pragma once

#include <string>

using namespace std;

class Student
{
private:
	int num;
	string name;
	char sex;

public:
	void get_value();
	void display();
};

