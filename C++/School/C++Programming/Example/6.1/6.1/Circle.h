#pragma once

#include "Point.h"

class Circle :
	virtual public Point
{
protected:
	float radius;

public:
	Circle(float x = 0, float y = 0, float r = 0);
	void set_radius(float radius);
	float get_radius() const;
	float area() const;
	friend ostream& operator << (ostream& output, const Circle& p);
};

