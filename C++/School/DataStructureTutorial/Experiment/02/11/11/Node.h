#pragma once

#include "NodeData.h"

class Node
{
public:
	NodeData data;
	Node* next_node_ip;
	~Node();
	Node();
	Node(NodeData node_data);
	void display_node();
};

