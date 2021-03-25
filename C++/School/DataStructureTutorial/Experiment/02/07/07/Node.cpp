#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
	cout << "É¾³ýthis nodeÁËÅ¶" <<  endl;
}

Node::Node()
{
	data = 0;
	next_node_ip = NULL;
}

Node::Node(int node_data)
{
	data = node_data;
	next_node_ip = NULL;
}

void Node::display_node_data()
{
	cout << "this node data: " << data << endl;
}

int Node::node_data()
{
	return data;
}
