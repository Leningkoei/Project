#pragma once

#include "Student.h"

class Student1 :
    public Student
{
private:
    Student monitor;
    int age;
    string address;

public:
    Student1(int n, string na, int n1, string na1, int a, string ad);
    void display1();
    void display_monitor();
};

