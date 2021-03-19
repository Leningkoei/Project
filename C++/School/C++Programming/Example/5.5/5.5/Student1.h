#pragma once

#include "Student.h"

class Student1 :
    public Student
{
private:
    int age;
    string address;

public:
    Student1(int n, string na, char s, int a, string ad);
    void display();
};

