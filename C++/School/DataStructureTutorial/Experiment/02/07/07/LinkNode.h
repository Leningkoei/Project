#pragma once

#include "Node.h"

class LinkNode
{
public:
	Node* head_node_ip;
	Node* last_node_ip;
	int length;

public:
	~LinkNode();
	LinkNode();
	void add_node_last(int node_data);
	void display_list();
	void merge_list(LinkNode* a, LinkNode* b);
};

