#include "Node.h"
#include <iostream>

using namespace std;

//	public:

Node::~Node()
{
	cout << "ɾ��this node��Ŷ" << endl;
}

Node::Node()
{
	this->data = "#";
	this->left_node_ip = NULL;
	this->right_node_ip = NULL;
}
