#include "Stack.h"
#include <iostream>

using namespace std;

int main()
{
	int i;
	int j;
	int k;
	int p;
//	int result;
	Stack* stack0 = new Stack();

	for (p = 0; p < 8; p++)
	{
		cout << "p = " << p << endl;
		for (j = p; j < 8; j++)
		{
			for (i = 0, k = 0; i < 8; i++)
			{
				if (stack0->traverse_stack_x(i) == true && stack0->traverse_stack_p(i, j) == true && stack0->traverse_stack_n(i, j) == true)
				{
					stack0->push(i, j);
					break;
				}
				else
				{
//					cout << "this node is:";
//					stack0->data[i]->display_node();

					k++;
				}
				if (k == 8)
				{
					stack0->pop();
					j = stack0->data[stack0->top]->node_y() + 1;
				}
			}
		}
	}
	stack0->display_stack();

	return 0;
}
