#pragma once

#include <iostream>

using namespace std;

class Point
{
protected:
	float x;
	float y;

public:
	Point(float x = 0, float y = 0);
	void set_point(float x, float y);
	float get_x() const;
	float get_y() const;
	friend ostream& operator << (ostream& output, const Point& p);
};

