#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
	cout << "ɾ��this node��Ŷ" << endl;
}

Node::Node()
{
	x = -999;
	y = -1;
}

Node::Node(int node_x, int node_y)
{
	x = node_x;
	y = node_y;
}

int Node::node_x()
{
	return x;
}

int Node::node_y()
{
	return y;
}

void Node::display_node()
{
	cout << "x = " << x << ", " << "y = " << y << endl;
}
