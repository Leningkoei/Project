#include "Stack.h"
#include <iostream>

using namespace std;

int main()
{
	int m;
	int n;
	int x;
	int y;
	Stack* stack0 = new Stack();

	n = 20;
	stack0->push(0, 0);
	m = 1;
	x = stack0->data[stack0->top]->node_x();
	y = stack0->data[stack0->top]->node_y();
	while (y < n)
	{
		for (x++ ; x < n && y < n - 1; x++)
		{
//			cout << x << ", " << y + 1 << "; ";
			if (stack0->traverse_stack_x(x) == true && stack0->traverse_stack_p(x, y + 1) == true && stack0->traverse_stack_n(x, y + 1))
			{
				stack0->push(x, y + 1);
				m++;
				x = 0;
				y++;
				break;
			}
		}
		if (x == n)
		{
			x = stack0->pop();
			m--;
//			cout << "x = " << x << endl;
			y--;
		}
//		cout << "m = " << m << endl;
		if (m == n)
		{
			break;
		}
	}
	
	stack0->display_stack();

	return 0;
}
