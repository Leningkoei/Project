#pragma once

#include "Node.h"

class Stack
{
public:
	Node* data[100];
	int top;

public:
	~Stack();
	Stack();
	int node_x(int i);
	int node_y(int i);
	void push(int x, int y);
//	void pop();
	int pop();
	void pop(int* x, int* y);
	void display_stack();
	bool traverse_stack_x(int x);
	bool traverse_stack_p(int x, int y);
	bool traverse_stack_n(int x, int y);
};

