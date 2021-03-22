#include "LinkNode.h"
#include <iostream>

using namespace std;

LinkNode::LinkNode()
{
	Node* head_node = new Node();
	head_node_ip = head_node;
	first_node_ip = NULL;
	length = 0;
}

void LinkNode::first_add_node(int node_data)
{
	Node* node = new Node(node_data);
	node->next_node_ip = head_node_ip->next_node_ip;
	head_node_ip->next_node_ip = node;
	first_node_ip = node;
	length++;
}

void LinkNode::display_list()
{
	int i = 0;
	cout << "length = " << endl;
	Node* p = first_node_ip;
	while (p != NULL)
	{
		cout << i << ": " << p->data << endl;
		p = p->next_node_ip;
		i++;
	}
}

Node* LinkNode::find_node(int x)
{
	Node* p = first_node_ip;
	while (p != NULL)
	{
		if (p->data == x)
		{
			break;
		}
		p = p->next_node_ip;
	}
	return p;
}

void LinkNode::display_node(Node* p)
{
	cout << p->data << endl;
}
