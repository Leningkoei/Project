#pragma once

#include "Node.h"

class LinkNode
{
private:
	Node* head_node_ip;
	Node* first_node_ip;
	int length;

public:
	LinkNode();
	void first_add_node(int node_data);
	void display_list();
	Node* find_node(int x);
	void display_node(Node* p);
};

