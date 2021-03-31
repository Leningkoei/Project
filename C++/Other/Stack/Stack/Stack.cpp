#include "Stack.h"
#include <iostream>

using namespace std;

Stack::~Stack()
{
	cout << ">=================" << endl;
	cout << "ÕýÔÚÉ¾³ýthis stack" << endl;

	int i;

	for (i = 0; i < 20; i++)
	{
		delete data[i];
	}

	cout << "É¾³ýthis stackÁËÅ¶" << endl;
	cout << ">=================" << endl;
}

Stack::Stack()
{
	int i;

	for (i = 0; i < 20; i++)
	{
		Node* node = new Node();

		data[i] = node;
	}
	top = -1;
}

void Stack::push(int x, int y)
{
	Node* node = new Node(x, y);

	top++;
	data[top] = node;
}

void Stack::pop()
{
	Node* node = new Node();
	delete data[top];
	data[top] = node;
	top--;
}

void Stack::display_stack()
{
	cout << "this list:" << endl;

	int i;

	for (i = 0; i < top + 1; i++)
	{
		cout << i << ": ";
		data[i]->display_node();
	}
}
