#pragma once

class Node
{
private:

public:
	char data;
	Node* previous_node_ip;
	Node* left_node_ip;
	Node* right_node_ip;
	~Node();
	Node();
	Node(char data);
};

