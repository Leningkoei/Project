#include "Stack.h"
#include <iostream>

using namespace std;

Stack::~Stack()
{
	cout << ">=================" << endl;
	cout << "正在删除this stack" << endl;

	int i;

	for (i = 0; i < 100; i++)
	{
		delete data[i];
	}

	cout << "删除this stack了哦" << endl;
	cout << ">=================" << endl;
}

Stack::Stack()
{
	int i;

	for (i = 0; i < 100; i++)
	{
		Node* node = new Node();

		data[i] = node;
	}
	top = -1;
}

int Stack::node_x(int i)
{
	return data[i]->node_x();
}

int Stack::node_y(int i)
{
	return data[i]->node_y();
}

bool Stack::traverse_stack_x(int x)
{
	int i;
	
	for (i = 0; i < top + 1; i++)
	{
		if (x == data[i]->node_x())
		{
			return false;
		}
	}
	return true;
}

bool Stack::traverse_stack_p(int x, int y)
{
	int i;

	for (i = 0; i < top + 1; i++)
	{
		if (x - y == data[i]->node_x() - data[i]->node_y())
		{
			return false;
		}
	}
	return true;
}

bool Stack::traverse_stack_n(int x, int y)
{
	int i;

	for (i = 0; i < top + 1; i++)
	{
		if (x + y == data[i]->node_x() + data[i]->node_y())
		{
			return false;
		}
	}
	return true;
}

void Stack::push(int x, int y)
{
	Node* node = new Node(x, y);

	top++;
	data[top] = node;
//	cout << "前进至";
//	data[top]->display_node();
}

void Stack::pop()
{
	Node* node = new Node();

	delete data[top];
	data[top] = node;
	top--;
//	cout << "后退至";
//	data[top]->display_node();
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
