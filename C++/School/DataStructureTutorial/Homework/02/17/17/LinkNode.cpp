#include "LinkNode.h"
#include <iostream>

using namespace std;

LinkNode::LinkNode()
{
	Node* head_node = new Node();
	head_node_ip = head_node;
	first_node_ip = NULL;
	last_node_ip = head_node;
	length = 0;
}

void LinkNode::add_node_first(int node_data)
{
	Node* node = new Node(node_data);
	node->next_node_ip = head_node_ip->next_node_ip;
	head_node_ip->next_node_ip = node;
	first_node_ip = node;
	if (length == 0)
	{
		last_node_ip = node;
	}
	length++;
}

void LinkNode::add_node_last(int node_data)
{
	Node* node = new Node(node_data);
	last_node_ip->next_node_ip = node;
	last_node_ip = node;
	if (length == 0)
	{
		first_node_ip = node;
	}
	length++;
}

void LinkNode::display_list()
{
	int i = 0;
	cout << "length = " << length << endl;
	Node* p = first_node_ip;
	while (i < length)
	{
		cout << i << ": " << p->data << endl;
		p = p->next_node_ip;
		i++;
	}
}

void LinkNode::merge_list(LinkNode* a, LinkNode* b)
{
	if (a->last_node_ip == NULL || b->last_node_ip == NULL)
	{
		cout << "2个单链表中存在循环单链表" << endl;
	}
//	else if (a == this || b == this)
//	{
//		cout << "不能自己插自己, 出问题" << endl;
//	}
	else
	{
		int i;
		Node* p;
		LinkNode* temp_list = new LinkNode();
		temp_list->head_node_ip->next_node_ip = a->first_node_ip;
		temp_list->first_node_ip = a->first_node_ip;
		temp_list->last_node_ip = NULL;
		a->last_node_ip->next_node_ip = b->first_node_ip;
		b->last_node_ip->next_node_ip = a->first_node_ip;
		temp_list->length = a->length + b->length;
		p = temp_list->first_node_ip;
		for (i = 0; i < temp_list->length; i++)
		{
			add_node_last(p->data);
			p = p->next_node_ip;
		}
		delete temp_list;
		a->last_node_ip->next_node_ip = NULL;
		b->last_node_ip->next_node_ip = NULL;
		last_node_ip = NULL;
	}
}

void LinkNode::merge_list_kai(LinkNode* a, LinkNode* b)
{
	if (a->last_node_ip == NULL || b->last_node_ip == NULL)
	{
		cout << "2个单链表中存在循环单链表" << endl;
	}
	else if (a == this || b == this)
	{
		cout << "不能自己插自己, 会死循环" << endl;
	}
	else
	{
		Node* p;
		p = a->first_node_ip;
		while (p != NULL)
		{
			add_node_last(p->data);
			p = p->next_node_ip;
		}
		p = b->first_node_ip;
		while (p != NULL)
		{
			add_node_last(p->data);
			p = p->next_node_ip;
		}
		last_node_ip->next_node_ip = first_node_ip;
		last_node_ip = NULL;
	}
}
