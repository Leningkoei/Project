#include "Stack.h"
#include <iostream>

using namespace std;

//		public:

Stack::~Stack()
{
	//		TODO
}

Stack::Stack()
{
	int i;

	for (i = 0; i < 20; i++)
	{
		data[i] = NULL;
	}
	this->length = 0;
}

void Stack::AddNode(int x, int y)
{
	Node* node = new Node();

	node->x = x;
	node->y = y;
	data[length] = node;
	length++;
}

void Stack::DisplayStack()
{
	cout << "this stack: ";

	int i;

	for (i = 0; i < this->length; i++)
	{
		data[i]->DisplayNode();
	}
}
