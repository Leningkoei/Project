#pragma once

#include "Student.h"

class Student1 :
    private Student
{
private:
    int age;
    string address;

public:
    void get_value_1();
    void display_1();
};

