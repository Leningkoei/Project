#pragma once

#include "Node.h"

class LinkNode
{
private:
	//声明承接头结点的地址的变量
	Node* head_node_ip;
	//声明承接首节点的地址的变量(价值上 == head_ip->next_ip)
	Node* first_node_ip;
	//声明承接尾节点的地址的变量
	Node* last_node_ip;
	//声明承接单链表的长度的变量
	int length;

public:
	//默认构造函数(初始化单链表(创建头节点head_node, 将head_node的地址赋予head_node_ip, 初始化其他变量)
	LinkNode();
	//将新节点插入为首节点
	void first_add_node(int node_data);
	//将新节点插入为尾节点
	void last_add_node(int node_data);
	//输出单链表
	void display_list();
};

