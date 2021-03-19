#include "Box.h"
#include <iostream>
using namespace std;


Box::Box(int h, int w, int len)
{
	height = h;
	width = w;
	length = len;
	return;
}


int Box::volume()
{
	int v;
	v = height * width * length;
	return v;
}