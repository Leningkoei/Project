// 例2.4 找出一个整型数组中的元素的最大值


#include <iostream>
using namespace std;


class Array_Max
{
private:
	int array[10];
	int max;
public:
	void set_value();
	void max_value();
	void show_max();
};


void Array_Max::set_value()
{
	int i;
	for (i = 0; i < 10; i++)
	{
		cin >> array[i];
	}
	return;
}


void Array_Max::max_value()
{
	int i;
	max = array[0];
	for (i = 1; i < 10; i++)
	{
		if (array[i] > max)
		{
			max = array[i];
		}
	}
	return;
}


void Array_Max::show_max()
{
	cout << "max = " << max;
	return;
}


int main()
{
	Array_Max array_max;
	array_max.set_value();
	array_max.max_value();
	array_max.show_max();
	return 0;
}