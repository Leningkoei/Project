#include "Stack.h"
#include <iostream>

using namespace std;

Stack::~Stack()
{
//	cout << "ÕýÔÚÉ¾³ýthis stack" << endl;

	int i;

	for (i = 0; i < 20; i++)
	{
		delete data[i];
	}

//	cout << "É¾³ýthis stackÁËÅ¶" << endl;
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

void Stack::push(int arrive_time)
{
	Node* node = new Node(arrive_time);

	top++;
	delete data[top];
	data[top] = node;
}

int Stack::pop()
{
	int arrive_time;
	Node* node = new Node();

	arrive_time = data[top]->node_arrive_time();
	delete data[top];
	data[top] = node;
	top--;

	return arrive_time;
}

void Stack::left(int n, int left_time)
{
	int i;
	int arrive_time;
	int money;
	Stack* temp_stack = new Stack();

	if (n > top)
	{
		cout << "Warning! Out!" << endl;
	}
	else
	{
		for (i = 0; i < n; i++)
		{
			temp_stack->push(pop());
		}

		arrive_time = pop();
		if (arrive_time >= left_time)
		{
			cout << "Warning! Loss!" << endl;
			push(arrive_time);
		}
		else
		{
			money = 5 * (left_time - arrive_time);
			cout << "arrive_time = " << arrive_time << endl;
			cout << "left_time = " << left_time << endl;
			cout << "money = $" << money << endl;
		}

		for (i = 0; i < n; i++)
		{
			push(temp_stack->pop());
		}
		delete temp_stack;
	}
}

void Stack::display_stack()
{
	cout << ">============" << endl;
	cout << "this stack:" << endl;

	int i;

	for (i = 0; i < top + 1; i++)
	{
		cout << i << ": " << data[i]->node_arrive_time() << endl;
	}

	cout << ">============" << endl;
}
