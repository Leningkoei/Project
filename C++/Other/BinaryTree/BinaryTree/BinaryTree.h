#pragma once

#include "Node.h"
#include <string>

using namespace std;

class BinaryTree
{
private:

public:
	Node* root_ip;
	~BinaryTree();
	BinaryTree();
	BinaryTree(string one_string);
};

