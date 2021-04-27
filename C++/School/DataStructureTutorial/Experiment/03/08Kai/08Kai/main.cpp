#include "Stack.h"
#include <iostream>

using namespace std;

int main()
{
	Stack* stack0 = new Stack();

	stack0->AddNode(0, 0);
	stack0->AddNode(1, 2);
	stack0->DisplayStack();

	return 0;
}
