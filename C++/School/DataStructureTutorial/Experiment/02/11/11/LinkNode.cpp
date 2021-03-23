#include "LinkNode.h"
#include <iostream>
#include <fstream>

using namespace std;

LinkNode::~LinkNode()
{
//	cout << "析构了LinkNode哦" << endl;
}

LinkNode::LinkNode()
{
	Node* head_node = new Node();
	head_node_ip = head_node;
	length = 0;
}

void LinkNode::add_node_first(NodeData node_data)
{
	Node* node = new Node(node_data);
	node->next_node_ip = head_node_ip->next_node_ip;
	head_node_ip->next_node_ip = node;
	length++;
}

void LinkNode::display_list()
{
//	cout << "length = " << length << endl;
	int i = 0;
	Node* p = head_node_ip->next_node_ip;
	while (p != NULL)
	{
		cout << i << ":" << endl;
		p->display_node();
		cout << "------------" << endl;
		p = p->next_node_ip;
		i++;
	}
}

void LinkNode::sort_no_plus()
{
	int i;
	int j;
	Node* p;
	Node* q;
	Node* r;
	for (i = 0; i < length - 1; i++)
	{
		p = head_node_ip;
		for (j = 0; j < length - 1; j++)
		{
			q = p->next_node_ip;
			r = q->next_node_ip;
			if (q->data.no > r->data.no)
			{
				change_node(p, q, r);
			}
			p = p->next_node_ip;
		}
	}
}

void LinkNode::sort_depno_plus()
{
	int i;
	int j;
	Node* p;
	Node* q;
	Node* r;
	for (i = 0; i < length - 1; i++)
	{
		p = head_node_ip;
		for (j = 0; j < length - 1; j++)
		{
			q = p->next_node_ip;
			r = q->next_node_ip;
			if (q->data.depno > r->data.depno)
			{
				change_node(p, q, r);
			}
			p = p->next_node_ip;
		}
	}
}

void LinkNode::sort_salary_plus()
{
	int i;
	int j;
	Node* p;
	Node* q;
	Node* r;
	for (i = 0; i < length - 1; i++)
	{
		p = head_node_ip;
		for (j = 0; j < length - 1; j++)
		{
			q = p->next_node_ip;
			r = q->next_node_ip;
			if (q->data.salary > r->data.salary)
			{
				change_node(p, q, r);
			}
			p = p->next_node_ip;
		}
	}
}

void LinkNode::delete_node_no(int no_delete)
{
	Node* p;
	Node* q;
	p = head_node_ip;
	while (p->next_node_ip != NULL && p->next_node_ip->data.no != no_delete)
	{
		p = p->next_node_ip;
	}
	q = p->next_node_ip;
	if (p->next_node_ip != NULL)
	{
		p->next_node_ip = q->next_node_ip;
		delete q;
		length--;
	}
	else
	{
		cout << "想要删除的节点不存在哦" << endl;
	}
}

void LinkNode::write_list()
{
	ofstream outfile("D:\\MicrosoftVisualStudio\\Project\\C++\\School\\DataStructureTutorial\\Experiment\\02\\11\\11\\emp.txt", ios::out);
	int i = 0;
	Node* p = head_node_ip->next_node_ip;
	while (p != NULL)
	{
		outfile << i << ":" << endl;
		outfile << "no: " << p->data.no << endl;
		outfile << "name: " <<  p->data.name << endl;
		outfile << "depno: " << p->data.depno << endl;
		outfile << "salary: " << p->data.salary << endl;
		outfile << "------------" << endl;
		p = p->next_node_ip;
		i++;
	}
}

void change_node(Node* p, Node* q, Node* r)
{
	p->next_node_ip = r;
	q->next_node_ip = r->next_node_ip;
	r->next_node_ip = q;
}
