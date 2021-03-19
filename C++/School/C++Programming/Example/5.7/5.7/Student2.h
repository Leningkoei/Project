#pragma once

#include "Student1.h"

class Student2 :
    public Student1
{
private:
    int score;

public:
    Student2(int n, string na, int a, int s);
    void display2();
};

