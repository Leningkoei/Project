#pragma once

#include <string>

using namespace std;

class Node
{
public:
	//默认构造函数(用来定义头节点head_node)
	Node();
	//声明接纳单个结点的数据的变量(假设节点数据的数据类型是int)
	int data;
	//声明接纳下1个结点的地址的变量
	Node* next_node_ip;
	//带数据的构造函数(用来定义有data的节点)
	Node(int node_data);
};

