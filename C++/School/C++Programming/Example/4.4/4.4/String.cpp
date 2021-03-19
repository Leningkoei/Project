#include "String.h"
#include <iostream>

using namespace std;

String::String()
{
	p = NULL;
}

String::String(const char* str)
{
	p = str;
}

void String::display()
{
	cout << p;
}