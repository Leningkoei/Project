#pragma once

#include "Node.h"

class LinkNode
{
private:
	Node* p_first;
	int length;

public:
	LinkNode();
	void add_node_f(int node_data);
	void display_list();
};

