#include "Box.h"
#include <iostream>
using namespace std;


int main()
{
	Box box1(12, 25, 30);
	cout << "The volume of box1 is " << box1.volume() << endl;
	Box box2(15, 30, 21);
	cout << "The volume of box2 is " << box2.volume() << endl;
	return 0;
}