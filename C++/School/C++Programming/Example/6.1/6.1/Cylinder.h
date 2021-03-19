#pragma once

#include "Circle.h"

class Cylinder :
	public Circle
{
protected:
	float height;

public:
	Cylinder(float x = 0, float y = 0, float r = 0, float h = 0);
	void set_height(float h);
	float get_height() const;
	float area() const;
	float volume() const;
	friend ostream& operator << (ostream& output, const Cylinder& p);
};

