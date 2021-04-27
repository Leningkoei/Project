#pragma once

#include "Node.h"

class Stack
{
	friend class QnPb;

private:
	Node* data[20];
	int length;

	bool TvlStack(int x, int y);
	bool TvlStack(int x);

public:
	~Stack();
	Stack();
	void AddNode(int x, int y);
	void DisplayStack();
};

