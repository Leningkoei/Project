#include "Node.h"
#include <cstdio>

Node::Node()
{
	data = '0';
	next_node_ip = NULL;
}

Node::Node(char node_data)
{
	data = node_data;
	next_node_ip = NULL;
}
