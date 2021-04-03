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
	int* node_x_ip();
	int* node_y_ip();
	void display_node();
	void x_plus_plus();
};

