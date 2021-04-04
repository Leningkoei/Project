#include "Node.h"
#include <iostream>

using namespace std;

Node::~Node()
{
//	cout << "É¾³ýthis nodeÁËÅ¶" << endl;
}

Node::Node()
{
	arrive_time = -1;
}

Node::Node(int time)
{
	arrive_time = time;
}

int Node::node_arrive_time()
{
	return arrive_time;
}
