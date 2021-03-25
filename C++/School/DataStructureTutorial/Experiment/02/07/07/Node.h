#pragma once

class Node
{
private:
	int data;

public:
	Node* next_node_ip;
	~Node();
	Node();
	Node(int node_data);
	void display_node_data();
	int node_data();
};

