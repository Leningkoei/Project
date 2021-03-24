#pragma once

#include "Node.h"

class LinkNode
{
private:
	Node* head_node_ip;
	Node* first_node_ip;
	Node* last_node_ip;
	int length;

public:
	LinkNode();
	void add_node_first(int node_data);
	void add_node_last(int node_data);
	void display_list();
	void merge_list(LinkNode* a, LinkNode* b);
	void merge_list_kai(LinkNode* a, LinkNode* b);
};

