#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
	cout << "ɾ��this node��Ŷ" << endl;
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
