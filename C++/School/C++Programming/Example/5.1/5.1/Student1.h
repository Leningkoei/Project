#pragma once

#include "Student.h"

class Student1 :
    public Student
{
private:
    int age;
    string addr;

public:
    void get_value_1();
    void display_1();
};

