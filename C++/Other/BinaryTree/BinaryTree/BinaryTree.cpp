#include "BinaryTree.h"
#include <iostream>

using namespace std;

BinaryTree::~BinaryTree()
{
	cout << "ÕýÔÚÉ¾³ýthis bina tree" << endl;

	Node* p;

	p = this->root_ip;
	distory_bina_tree(p);

	cout << "É¾³ýthis bina treeÁËÅ¶" << endl;
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
			
			break;
		}
		case ')':
		{
			p = p->previous_node_ip;
			
			break;
		}
		case ',':
		{
			p = p->previous_node_ip->right_node_ip;
			
			break;
		}
		case ' ':
		{
			///	Do nothing;
			
			break;
		}
		default:
		{
			p->data = one_string[i];
			
			break;
		}
		}
	}
}

void BinaryTree::distory_bina_tree(Node* p)
{
	if (p != NULL)
	{
		distory_bina_tree(p->left_node_ip);
		distory_bina_tree(p->right_node_ip);
		delete p;
	}
}

void BinaryTree::display_bina_tree()
{
	cout << "this bina tree:";

	Node* p;

	p = this->root_ip;
	display_bina_tree(p);

	cout << endl;
}

void BinaryTree::display_bina_tree(Node* p)
{
	if (p != NULL)
	{
		cout << p->data;
		if (p->left_node_ip != NULL || p->right_node_ip != NULL)
		{
			cout << "(";
			display_bina_tree(p->left_node_ip);
			if (p->right_node_ip != NULL)
			{
				cout << ", ";
			}
			display_bina_tree(p->right_node_ip);
			cout << ")";
		}
	}
}

