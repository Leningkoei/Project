#pragma once

class Node
{
	friend class BinaryTree;

private:
	char data;
	Node* previous_node_ip;
	Node* left_node_ip;
	Node* right_node_ip;

public:
	~Node();
	Node();
	Node(char data);
};

