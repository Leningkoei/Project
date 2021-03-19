// 例1.12 利用引用形参实现两个变量的值的互换


#include <iostream>
using namespace std;


void swap(int& a, int& b)
{
	int temp;
	temp = a;
	a = b;
	b = temp;
}


int main()
{
	int i = 3, j = 5;
	swap(i, j);
	cout << "i = " << i << " " << "j = " << j << endl;
	return 0;
}