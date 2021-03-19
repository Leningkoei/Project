#pragma once

#include <string>

using namespace std;

class Student
{
private:
	int num;
	string name;
	float score;

public:
	Student(int n, string na, float score);
	void display();
};

