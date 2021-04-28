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
	bool FindBrother(Node* now_ip, Node* goal_ip);
	int get_bina_tree_length(Node* p);

public:
	~BinaryTree();
	BinaryTree();
	BinaryTree(string one_string);
	void display_bina_tree();
	Node* find_node_ip(char want_data);
	int find_node_level(char want_data);
	bool FindBrother(char x, char y);
	int get_bina_tree_length();
};

