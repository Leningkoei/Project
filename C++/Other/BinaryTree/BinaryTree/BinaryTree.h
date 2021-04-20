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
	Node* find_node_ip(Node* p, char want_data);
	int find_node_level(Node* p, char want_data, int level);
	int get_bina_tree_length(Node* p);

public:
	~BinaryTree();
	BinaryTree();
	BinaryTree(string one_string);
	void display_bina_tree();
	Node* find_node_ip(char want_data);
	int find_node_level(char want_data);
	int get_bina_tree_length();
};

