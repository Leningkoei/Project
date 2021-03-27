#include "LinkNode.h"
#include <iostream>

using namespace std;

LinkNode::~LinkNode()
{
	Node* p;
	Node* q;

	for (p = head_node_ip, q = p; p != NULL; q = p)
	{
		p = p->next_node_ip;
		delete q;
	}

	cout << "删除this list了哦" << endl;
}

LinkNode::LinkNode()
{
	//创建1个新节点head_node
	Node* head_node = new Node();
	//head_node_ip承接head_node的地址
	head_node_ip = head_node;
	//first_ip初始化为NULL
	first_node_ip = NULL;
	//last_ip初始化为NULL
	last_node_ip = head_node;
	//length初始化为0
	length = 0;
}

//将新节点作为首节点插入
void LinkNode::add_node_first(int node_data)
{
	//创建1个有数据的新节点node
	Node* node = new Node(node_data);
	//用原首节点的地址作为新插首节点的下1个节点的地址
	node->next_node_ip = head_node_ip->next_node_ip;
	//用新插节点的地址作为新头节点的下1个节点的地址
	head_node_ip->next_node_ip = node;
	//用新插节点的地址作为的新头节点的地址
	first_node_ip = node;
	//如果此时单链表长度为0(如果该新插节点是第1个节点)
	if (length == 0)
	{
		//用新插节点的地址作为尾节点的地址
		last_node_ip = node;
	}
	//单链表长度自增1
	length++;
}

//将新节点作为尾节点插入
void LinkNode::add_node_last(int node_data)
{
	//创建1个有数据的新节点node
	Node* node = new Node(node_data);
	//用新插节点的地址作为原尾节点的下1个节点的地址
	last_node_ip->next_node_ip = node;
	//用新插节点的地址作为新的尾节点的地址
	last_node_ip = node;
	if (length == 0)
	{
		first_node_ip = node;
	}
	//单链表长度自增1
	length++;
}

void LinkNode::display_list()
{
	int i = 0;
	cout << "length = " << length << endl;
	//声明并定义1个指向首节点的地址的指针
	Node* p = first_node_ip;
	//如果该指针不指向空地址
	while (p != NULL)
	{
		//输出该地址下节点的数据
		cout << i << ": " << p->node_data() << endl;
		//将p指向下1个节点的地址
		p = p->next_node_ip;
		i++;
	}
}
