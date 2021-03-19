#pragma once

#include "Student.h"

class Student1 :
    public Student
{
private:
    int age;

public:
    Student1(int n, string na, int a);
    void display1();
};

