#include "Box.h"

Box::Box(int w, int len)
{
	width = w;
	length = len;

	return;
}

int Box::volume()
{
	int volume;
	volume = height * width * length;

	return volume;
}

int Box::height = 10;