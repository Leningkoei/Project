#pragma once

#include "Node.h"

class Stack
{
	friend class QnPb;

private:
	Node* data[20];
	int length;

	bool TvlStack(int x, int y);

public:
	~Stack();
	Stack();
	void DisplayStack();
	void DisplayStackKai();
	void Pop();
	void Push(int x, int y);
	void printQueen();
	void printSpace(int num);
};

