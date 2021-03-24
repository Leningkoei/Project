#include "Node.h"
#include <cstdio>
#include <iostream>

using namespace std;

Node::~Node()
{
	cout << "É¾³ýthis nodeÁËÅ¶" << endl;
}

Node::Node()
{
	data = '0';
	next_node_ip = NULL;
}

Node::Node(char node_data)
{
	data = node_data;
	next_node_ip = NULL;
}

void display_node_data(Node* p)
{
	if (p == NULL)
	{
		cout << "this node²»´æÔÚ°¡" << endl;
	}
	else
	{
		cout << p->data << endl;
	}
}
