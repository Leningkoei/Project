#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
	//		cout << "ɾ��this node��Ŷ" << endl;
}

Node::Node()
{
	this->x = 0;
	this->y = 0;
}

void Node::DisplayNode()
{
	cout << "(" << this->x << ", " << this->y << ")";
}
