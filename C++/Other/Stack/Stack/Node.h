#pragma once
class Node
{
private:
	int data[2];

public:
	~Node();
	Node();
	Node(int x, int y);
	void display_node();
};

