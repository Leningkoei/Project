#pragma once

#include "Node.h"
#include <string>

using namespace std;

class BinaryTree
{
private:
	Node* root_ip;

	void distory_bina_tree(Node* p);
	void display_bina_tree(Node* p);

public:
	~BinaryTree();
	BinaryTree();
	BinaryTree(string one_string);
	void display_bina_tree();
};

