#include "Box.h"
#include <iostream>
using namespace std;


Box::Box()
{
	height = 10;
	width = 10;
	length = 10;
}


int Box::volume()
{
	int v;
	v = height * width * length;
	return v;
}