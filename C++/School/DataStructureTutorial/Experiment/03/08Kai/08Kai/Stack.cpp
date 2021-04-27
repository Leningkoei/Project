#include "Stack.h"
#include <iostream>

using namespace std;

//		public:

Stack::~Stack()
{
	//		cout << "ÕýÔÚÉ¾³ýthis stack" << endl;

	int i;

	for (i = 0; i < length; i++)
	{
		delete this->data[i];
	}

	//		cout << "É¾³ýthis stackÁËÅ¶" << endl;
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

void Stack::DisplayStack()
{
	cout << "this stack: ";

	int i;

	for (i = 0; i < this->length; i++)
	{
		data[i]->DisplayNode();
	}

	cout << endl;
}

bool Stack::TvlStack(int x, int y)
{
	int i;

	for (i = 0; i < length; i++)
	{
		if (data[i]->x == x || data[i]->x + data[i]->y == x + y || data[i]->x - data[i]->y == x - y)
		{
			return false;
		}
	}
	return true;
}

void Stack::Pop()
{
	delete data[length - 1];
	data[length - 1] = NULL;
	length--;
}

void Stack::Push(int x, int y)
{
	Node* node = new Node();

	node->x = x;
	node->y = y;
	data[length] = node;
	length++;
}
