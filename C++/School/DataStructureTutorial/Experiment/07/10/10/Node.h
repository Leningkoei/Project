#pragma once

#include <string>

using namespace std;

class Node
{
	friend class XXI;

private:
	string data;
	Node* left_node_ip;
	Node* right_node_ip;

public:
	~Node();
	Node();
};

