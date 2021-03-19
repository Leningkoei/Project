#pragma once
#include <iostream>
#include <string>
using namespace std;


class Student
{
private:
	int num;
	char name[10];
	char sex;
public:
	Student(int n, string nam, char s)
	{
		num = n;
		strcpy_s(name, nam.c_str());
		sex = s;
		cout << "Constructor called." << endl;
	}
	~Student()
	{
		cout << "Destructor called." << endl;
	}
	void display();
};

