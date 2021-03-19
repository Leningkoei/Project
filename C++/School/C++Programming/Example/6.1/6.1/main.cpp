#include "Point.h"
#include "Circle.h"
#include "Cylinder.h"

ostream& operator <<(ostream& output, const Point& p)
{
	output << "[" << p.x << "," << p.y << "]" << endl;

	return output;
}

ostream& operator <<(ostream& output, const Circle& p)
{
	output << "Center = [" << p.x << "," << p.y << "], radius = " << p.radius << ", area = " << p.area() << endl;

	return output;
}

ostream& operator <<(ostream& output, const Cylinder& p)
{
	output << "Center = [" << p.x << "," << p.y << "], radius = " << p.radius << ", area = " << p.area() << ", volume = " << p.volume() << endl;

	return output;
}

int main()
{
	Cylinder cy(3.5, 4.6, 7, 9.0);

	cout << cy << endl;

	cy.set_point(1.1, 2.2);
	cy.set_radius(4.4);
	cy.set_height(3.3);
	
	cout << cy << endl;

	return 0;
}