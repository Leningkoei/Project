#include "Stack.h"

int main()
{
	int i;
	int j;
	int k;
	int result;
	Stack* stack0 = new Stack();

	for (j = 0; j < 20; j++)
	{
		for (i = 0; i < 20; i++)
		{
			if (stack0->traverse_stack_x(i) == true && stack0->traverse_stack_p(i, j) == true && stack0->traverse_stack_n(i, j) == true)
			{
				stack0->push(i, j);
			}
		}
	}
	stack0->display_stack();

	return 0;
}
