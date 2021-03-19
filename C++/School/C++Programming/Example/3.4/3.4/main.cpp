#include "Box.h"
#include <iostream>
using namespace std;


int main()
{
	Box box1;
	Box box2(12);
	Box box3(15, 30);
	Box box4(15, 30, 20);
	cout << "The volume of box1 is " << box1.volume() << endl;
	cout << "The volume of box2 is " << box2.volume() << endl;
	cout << "The volume of box3 is " << box3.volume() << endl;
	cout << "The volume of box4 is " << box4.volume() << endl;
	return 0;
}