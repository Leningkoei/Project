#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
//	cout << "Îö¹¹ÁËNodeÅ¶" << endl;
}

Node::Node()
{
	data = NodeData();
	next_node_ip = NULL;
}

Node::Node(NodeData node_data)
{
	data = NodeData(node_data);
	next_node_ip = NULL;
}

void Node::display_node()
{
	data.display_node_data();
}
