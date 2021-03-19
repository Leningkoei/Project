#include "Cylinder.h"

Cylinder::Cylinder(float x, float y, float r, float h)
{
	Point::x = x;
	Point::y = y;
	Circle::radius = r;
	Cylinder::height = h;
}

void Cylinder::set_height(float h)
{
	Cylinder::height = h;
}

float Cylinder::get_height() const
{
	return height;
}

float Cylinder::area() const
{
	float area;
	
	area = Circle::area() * 2 + 3.14 * Circle::radius * height;

	return area;
}

float Cylinder::volume() const
{
	float volume;

	volume = Circle::area() * height;

	return volume;
}
