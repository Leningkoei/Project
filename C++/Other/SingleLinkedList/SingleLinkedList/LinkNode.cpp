#include "LinkNode.h"
#include <iostream>

using namespace std;

LinkNode::LinkNode()
{
	p_first = NULL;
	length = 0;
}

void LinkNode::add_node_f(int node_data)
{
	Node* node = new Node(node_data);
	node->p_next = p_first;
	p_first = node;
	length++;
}

void LinkNode::display_list()
{
	cout << "length = " << length << endl;
	Node *p = p_first;
	while (p != NULL)
	{
		cout << p->data << endl;
		p = p->p_next;
	}
}
