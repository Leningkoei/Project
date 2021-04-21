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
	Node* root;

	root = new Node(one_string[0]);
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
		this->distory_bina_tree(p->left_node_ip);
		this->distory_bina_tree(p->right_node_ip);
		delete p;
	}
}

void BinaryTree::display_bina_tree()
{
	cout << "this bina tree: ";

	Node* p;

	p = this->root_ip;
	this->display_bina_tree(p);

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
			this->display_bina_tree(p->left_node_ip);
			if (p->right_node_ip != NULL)
			{
				cout << ", ";
			}
			this->display_bina_tree(p->right_node_ip);
			cout << ")";
		}
	}
}

Node* BinaryTree::find_node_ip(char want_data)
{
	Node* want_node_ip;

	want_node_ip = this->find_node_ip(this->root_ip, want_data);
	
	return want_node_ip;
}

Node* BinaryTree::find_node_ip(Node* p, char want_data)
{
	Node* result;

	if (p == NULL)
	{
		result = NULL;
	}
	else if (p->data == want_data)
	{
		result = p;
	}
	else
	{
		result = this->find_node_ip(p->left_node_ip, want_data);
		if (result == NULL)
		{
			result = find_node_ip(p->right_node_ip, want_data);
		}
	}

	return result;
}

int BinaryTree::find_node_level(char want_data)
{
	int want_node_level;

	want_node_level = this->find_node_level(this->root_ip, want_data, 0);

	return want_node_level;
}

int BinaryTree::find_node_level(Node* p, char want_data, int level)
{
	int result;

	if (p == NULL)
	{
		result = -1;
	}
	else if (p->data == want_data)
	{
		result = level;
	}
	else
	{
		result = this->find_node_level(p->left_node_ip, want_data, level + 1);
		if (result == -1)
		{
			result = this->find_node_level(p->right_node_ip, want_data, level + 1);
		}
	}

	return result;
}

int BinaryTree::get_bina_tree_length()
{
	Node* p;
	int length;

	p = this->root_ip;
	length = this->get_bina_tree_length(p);

	return length;
}

int BinaryTree::get_bina_tree_length(Node* p)
{
	int length;
	int left_length;
	int right_length;

	if (p == NULL)
	{
		length = 0;
	}
	else
	{
		left_length = this->get_bina_tree_length(p->left_node_ip);
		right_length = this->get_bina_tree_length(p->right_node_ip);
		if (left_length >= right_length)
		{
			length = left_length + 1;
		}
		else
		{
			length = right_length + 1;
		}
	}

	return length;
}
