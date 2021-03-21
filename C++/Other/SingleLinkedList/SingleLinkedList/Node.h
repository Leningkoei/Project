#pragma once

#include <string>

using namespace std;

class Node
{
public:
	//单个结点的数据
	int data;
	//指向下1个结点地址的指针
	Node* p_next;
	//带数据的构造函数
	Node(int Node_data);
};

