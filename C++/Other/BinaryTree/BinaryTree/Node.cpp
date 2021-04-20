#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
	cout << "É¾³ýthis node" << this->data << "ÁËÅ¶" << endl;
}

Node::Node()
{
	this->data = '#';
	this->previous_node_ip = NULL;
	this->left_node_ip = NULL;
	this->right_node_ip = NULL;
}

Node::Node(char data)
{
	this->data = data;
	this->previous_node_ip = NULL;
	this->left_node_ip = NULL;
	this->right_node_ip = NULL;
}

void Node::display_node()
{
	if (this != NULL)
	{
		cout << "this node data: " << this->data << endl;
		cout << "this node previous node data: " << this->previous_node_ip->data << endl;
	}
	else
	{
		cout << "error!!!" << endl;
	}
}
