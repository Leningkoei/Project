#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
	cout << "ɾ��this node��Ŷ" << endl;
}

Node::Node()
{
	data[0] = -1;
	data[1] = -1;
}

Node::Node(int x, int y)
{
	data[0] = x;
	data[1] = y;
}

void Node::display_node()
{
	cout << "x = " << data[0] << ", " << "y = " << data[1] << endl;
}
