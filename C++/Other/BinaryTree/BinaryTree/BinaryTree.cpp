#include "BinaryTree.h"
#include <iostream>

using namespace std;

BinaryTree::~BinaryTree()
{
	///	Todo;
}

BinaryTree::BinaryTree()
{
	this->root_ip = NULL;
}

BinaryTree::BinaryTree(string one_string)
{
	///	e.g.: A(B(D(, G)), C(E, F))
	
	int i;
	Node* p;

	Node* root = new Node(one_string[0]);
	this->root_ip = root;
	///	root->previous_node_ip = NULL;
	p = this->root_ip;
	for (i = 1; i < one_string.length(); i++)
	{
		switch (one_string[i])
		{
		case '(':
		{
			Node* left_node = new Node();
			Node* right_node = new Node();
			p->left_node_ip = left_node;
			left_node->previous_node_ip = p;
			p->right_node_ip = right_node;
			right_node->previous_node_ip = p;
			p = p->left_node_ip;
		}
		case ')':
		{
			p = p->previous_node_ip;
		}
		case ',':
		{
			p = p->previous_node_ip->right_node_ip;
		}
		case ' ':
		{
			///	Do nothing;
		}
		default:
		{
			p->data = one_string[i];
		}
		}
	}
}
