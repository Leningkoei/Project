#pragma once

#include "Node.h"

class LinkNode
{
private:
	Node* head_node_ip;
	Node* last_node_ip;
	int length;

public:
	~LinkNode();
	LinkNode();
	void add_node_last(char node_data);
	void display_list();
	void display_node_no(int i);
	void display_list_length();
	bool empty();
	Node* find_node(int no);
	int find_node(char node_data);
	bool add_node(int i, char node_data);
	bool delete_node(int no);
};

