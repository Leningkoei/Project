#pragma once

class Node
{
public:
	char data;
	Node* next_node_ip;
	~Node();
	Node();
	Node(char node_data);
};

void display_node_data(Node* p);

