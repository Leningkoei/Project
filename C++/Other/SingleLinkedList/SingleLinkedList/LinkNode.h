#pragma once

#include "Node.h"

class LinkNode
{
private:
	Node* head;
	int length;

public:
	LinkNode();
	void add_node_f(int node_data);
};

