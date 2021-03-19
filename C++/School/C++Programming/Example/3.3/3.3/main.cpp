#include "Box.h"
#include <iostream>
using namespace std;


int main()
{
	Box box1;
	Box box2(15, 30, 25);
	cout << "The volume of box1 is " << box1.volume() << endl;
	cout << "The volume of box2 is " << box2.volume() << endl;
	return 0;
}