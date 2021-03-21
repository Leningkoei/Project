#include "LinkNode.h"

LinkNode::LinkNode()
{
	Node node();
	head = NULL;
	length = 0;
}

void LinkNode::add_node_f(int node_data)
{
	Node* node = new Node(node_data);
	head->node;
	length++;
}
