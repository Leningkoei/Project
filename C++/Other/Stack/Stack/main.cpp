#include "Stack.h"
#include <iostream>

using namespace std;

int main()
{
	Stack* stack0 = new Stack();

	stack0->push(0, 0);
	stack0->push(0, 1);
	stack0->push(0, 2);
	stack0->pop();
	stack0->push(1, 0);
	stack0->display_stack();

	delete stack0;

	return 0;
}
