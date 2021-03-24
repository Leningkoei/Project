#include "LinkNode.h"
#include <iostream>

using namespace std;

LinkNode::~LinkNode()
{
	cout << "删除this list了哦" << endl;
}

LinkNode::LinkNode()
{
	Node* head_node = new Node();
	head_node_ip = head_node;
	last_node_ip = head_node;
	length = 0;
}

void LinkNode::add_node_last(char node_data)
{
	Node* node = new Node(node_data);
	last_node_ip->next_node_ip = node;
	last_node_ip = node;
	length++;
}

void LinkNode::display_list()
{
	cout << "------------" << endl;
	cout << "this list:" << endl;
	int i;
	Node* p = head_node_ip->next_node_ip;
	
	i = 0;
	while (p != NULL)
	{
		cout << i << ": " << p->data << endl;
		p = p->next_node_ip;
		i++;
	}
	cout << "------------" << endl;
}

void LinkNode::display_node_data(Node* p)
{
	if (p == NULL)
	{
		cout << "this node不存在啊" << endl;
	}
	else
	{
		cout << p->data << endl;
	}
}

void LinkNode::display_node_no(int i)
{
	if (i == -1)
	{
		cout << "this node不存在啊" << endl;
	}
	else
	{
		cout << i << endl;
	}
}

void LinkNode::display_list_length()
{
	cout << "this list length = " << length << endl;
}

bool LinkNode::empty()
{
	if (length == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

Node* LinkNode::find_node(int no)
{
	int i;
	Node* p;

	p = head_node_ip->next_node_ip;
	for (i = 0; p != NULL && i != no; i++)
	{
		p = p->next_node_ip;
	}
	return p;
}

int LinkNode::find_node(char node_data)
{
	int i;
	Node* p;

	p = head_node_ip->next_node_ip;
	for (i = 0; p != NULL; i++)
	{
		if (p->data == node_data)
		{
			return i;
		}
		p = p->next_node_ip;
	}
	return -1;
}
