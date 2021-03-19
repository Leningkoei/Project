#include "main.h"
using namespace std;

int main()
{
	Box box1(15, 30, 25);
	Box box2;
	cout << "The volume of box1 is " << box1.volume() << endl;
	cout << "The volume of box2 is " << box2.volume() << endl;
	box2 = box1;
	cout << "The volume of box2' is " << box2.volume() << endl;
	return 0;
}