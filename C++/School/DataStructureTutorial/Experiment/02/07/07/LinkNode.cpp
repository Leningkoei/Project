#include "LinkNode.h"
#include <iostream>

using namespace std;

LinkNode::~LinkNode()
{
	cout << ">=============" << endl;

	Node* p;
	Node* q;

	for (p = head_node_ip, q = p; p != NULL; delete q, q = p)
	{
		p = p->next_node_ip;
	}

	cout << "<------------" << endl;
	cout << "É¾³ýthis listÁËÅ¶" << endl;

	cout << ">=============" << endl;
}

LinkNode::LinkNode()
{
	Node* head_node = new Node();
	
	head_node_ip = head_node;
	last_node_ip = head_node;
	length = 0;
}

void LinkNode::add_node_last(int node_data)
{
	Node* node = new Node(node_data);

	last_node_ip->next_node_ip = node;
	last_node_ip = node;
	length++;
}

void LinkNode::display_list()
{

	cout << ">=============" << endl;

	int i;
	Node* p;

	cout << "this list: " << endl;
	for (i = 0, p = head_node_ip->next_node_ip; p != NULL; i++, p = p->next_node_ip)
	{
		cout << i << ": ";
		p->display_node_data();
		cout << endl;
	}

	cout << ">=============" << endl;
}

void LinkNode::merge_list(LinkNode* a, LinkNode* b)
{
	Node* p;
	Node* q;
	Node* r;

	for (q = a->head_node_ip->next_node_ip, r = b->head_node_ip->next_node_ip; q != NULL && r != NULL; q = q->next_node_ip, r = r->next_node_ip)
	{
		p = q;
		add_node_last(p->node_data());
		p = r;
		add_node_last(p->node_data());
	}

	if (a->length >= b->length)
	{
		for (; q != NULL; q = q->next_node_ip)
		{
			add_node_last(q->node_data());
		}
	}
	else
	{
		for (; r != NULL; r = r->next_node_ip)
		{
			add_node_last(r->node_data());
		}
	}
}
