#pragma once

#include "Node.h"

class Stack
{
private:
	Node* data[20];
	int top;

public:
	~Stack();
	Stack();
	void push(int x, int y);
	void pop();
	void display_stack();
};

