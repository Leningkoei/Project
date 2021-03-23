#pragma once

#include "Node.h"

class LinkNode
{
private:
	Node* head_node_ip;
	int length;

public:
	~LinkNode();
	LinkNode();
	void add_node_first(NodeData node_data);
	void display_list();
	void sort_no_plus();
	void sort_depno_plus();
	void sort_salary_plus();
	void delete_node_no(int no_delete);
	void write_list();
};

void change_node(Node*p, Node*q, Node* r);

