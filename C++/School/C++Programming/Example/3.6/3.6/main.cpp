#include "main.h"
#include "Box.h"



int main()
{
	Box a[3] =
	{
		Box(10, 12, 15),
		Box(15, 18, 20),
		Box(16, 20, 26)
	};
	cout << "Volume of a[0] is " << a[0].volume() << endl;
	cout << "Volume of a[1] is " << a[1].volume() << endl;
	cout << "Volume of a[2] is " << a[2].volume() << endl;
	return 0;
}