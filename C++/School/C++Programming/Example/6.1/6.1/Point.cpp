#include "Point.h"

Point::Point(float x, float y)
{
	Point::x = x;
	Point::y = y;
}

void Point::set_point(float x, float y)
{
	Point::x = x;
	Point::y = y;
}

float Point::get_x() const
{
	return x;
}

float Point::get_y() const
{
	return y;
}