#pragma once

class Node
{
private:
	int x;
	int y;

public:
	~Node();
	Node();
	Node(int x, int y);
	int node_x();
	int node_y();
	void display_node();
};

