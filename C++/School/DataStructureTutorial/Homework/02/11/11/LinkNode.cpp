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
	while (p != NULL && p->data != x)
	{
		p = p->next_node_ip;
	}
	return p;
}

Node* LinkNode::find_node_kai_kou(int x)
{
	Node* p = first_node_ip;
	while (p != NULL && p->data < x)
	{
		p = p->next_node_ip;
	}
	if (p == NULL || p->data > x)
	{
		return NULL;
	}
	else
	{
		return p;
	}
}

Node* LinkNode::find_node_kai_otsu(int x)
{
	Node* p = first_node_ip;
	while (p != NULL && p->data > x)
	{
		p = p->next_node_ip;
	}
	if (p == NULL || p->data < x)
	{
		return NULL;
	}
	else
	{
		return p;
	}
}

void LinkNode::display_node(Node* p)
{
	if (p != NULL)
	{
		cout << p->data << endl;
	}
	else
	{
		cout << "Ã»ÕÒµ½node_data == xµÄnode" << endl;
	}
}
