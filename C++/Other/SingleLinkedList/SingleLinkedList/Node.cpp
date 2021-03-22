#include "Node.h"
#include <cstdio>

Node::Node()
{
	//头节点的data设为0(实际上不会调用)
	data = 0;
	//头节点的下1个节点的地址next_ip初始化为NULL(价值上 == first_ip, 初始化时因为没有首节点first_node所以初始化为NULL)
	next_node_ip = NULL;
}

Node::Node(int node_data)
{
	//data承接节点数据
	data = node_data;
	//next_ip初始化为NULL, 将在LinkNode类中修改
	next_node_ip = NULL;
}
