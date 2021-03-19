#include "Compare.cpp"
#include <iostream>

using namespace std;

int main()
{
	Compare <int> c1(4, 7);
	Compare <int> c2(45, 98);
	cout << c1.max() << endl;
	cout << c2.max() << endl;
	
	return 0;
}