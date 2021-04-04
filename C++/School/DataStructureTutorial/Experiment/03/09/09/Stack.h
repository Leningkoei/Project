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
	void push(int arrive_time);
	int pop();
	void left(int n, int left_time);
	void display_stack();
};

