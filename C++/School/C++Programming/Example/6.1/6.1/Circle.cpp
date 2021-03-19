#include "Circle.h"

Circle::Circle(float x, float y, float r) :
	Point(x, y)
{
	Circle::radius = r;
}

void Circle::set_radius(float radius)
{
	Circle::radius = radius;
}

float Circle::get_radius() const
{
	return radius;
}

float Circle::area() const
{
	float area;
	
	area = 3.14 * radius * radius;

	return area;
}