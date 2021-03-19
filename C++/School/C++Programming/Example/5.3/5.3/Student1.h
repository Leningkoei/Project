#pragma once

#include "Student.h"

class Student1 :
    protected Student
{
private:
    int age;
    string address;

public:
    void get_value1();
    void display1();
};

