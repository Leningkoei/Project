#pragma once

class Node
{
	friend class QnPb;
	friend class Stack;

private:
	int x;
	int y;

public:
	~Node();
	Node();
	void DisplayNode();
};

