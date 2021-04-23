#include "XXI.h"
#include <fstream>
#include <iostream>

using namespace std;

//		private:

void XXI::CreatXXI(string* one_list, int one_list_length)
{
	int i;
	Node* p;
	Node* result;

	root_ip->data = one_list[0];

	for (i = 0, p = root_ip; i < one_list_length; i++)
	{
		result = this->FindNodeIP(one_list[i]);
		if (result != NULL)
		{
			p = result;
		}
		else
		{
			Node* node = new Node();

			node->data = one_list[i];
			if (p->left_node_ip == NULL)
			{
				p->left_node_ip = node;
			}
			else
			{
				p = p->left_node_ip;
				if (p->right_node_ip == NULL)
				{
					p->right_node_ip = node;
				}
				else
				{
					while (1)
					{
						p = p->right_node_ip;
						if (p->right_node_ip == NULL)
						{
							break;
						}
					}
					p->right_node_ip = node;
				}
			}
		}
	}
}

void XXI::CreatXXIKai(string* one_list, int one_list_length)
{
	int i;
	Node* p;
	//	Node* result;

	root_ip->data = one_list[0];

	for (i = 0, p = root_ip; i < one_list_length; i++)
	{
		//	result = this->FindNodeIP(one_list[i]);
		if (!(i % 2))
		{
			p = this->FindNodeIP(one_list[i]);
		}
		else
		{
			Node* node = new Node();

			node->data = one_list[i];
			if (p->left_node_ip == NULL)
			{
				p->left_node_ip = node;
			}
			else
			{
				p = p->left_node_ip;
				if (p->right_node_ip == NULL)
				{
					p->right_node_ip = node;
				}
				else
				{
					while (1)
					{
						p = p->right_node_ip;
						if (p->right_node_ip == NULL)
						{
							break;
						}
					}
					p->right_node_ip = node;
				}
			}
		}
	}
}

void XXI::DeleteXXI(Node* p)
{
	if (p != NULL)
	{
		this->DeleteXXI(p->left_node_ip);
		this->DeleteXXI(p->right_node_ip);
	}
	delete p;
}

void XXI::DisplayXXI(Node* p)
{
	if (p != NULL)
	{
		cout << p->data;
		if (p->left_node_ip != NULL || p->right_node_ip != NULL)
		{
			cout << "(";
			this->DisplayXXI(p->left_node_ip);
			if (p->right_node_ip != NULL)
			{
				cout << ", ";
			}
			this->DisplayXXI(p->right_node_ip);
			cout << ")";
		}
	}
}

Node* XXI::FindNodeIP(string want_data)
{
	Node* want_node_ip;

	want_node_ip = this->FindNodeIP(this->root_ip, want_data);

	return want_node_ip;
}

Node* XXI::FindNodeIP(Node* p, string want_data)
{
	Node* result;

	if (p == NULL)
	{
		result = NULL;
	}
	else if (p->data == want_data)
	{
		result = p;
	}
	else
	{
		result = this->FindNodeIP(p->left_node_ip, want_data);
		if (result == NULL)
		{
			result = FindNodeIP(p->right_node_ip, want_data);
		}
	}

	return result;
}

int XXI::GetNodeGrandsonNodeNum(Node* p)
{
	int num;

	if (p == NULL)
	{
		return 0;
	}
	num = 0;
	num = this->GetNodeSonNodeNum(p);
	num = num + this->GetNodeGrandsonNodeNum(p->right_node_ip);

	return num;
}

int XXI::GetNodeSonNodeNum(Node* p)
{
	int num;

	if (p == NULL)
	{
		return 0;
	}
	num = 1;
	num = num + this->GetNodeSonNodeNum(p->right_node_ip);

	return num;
	
}

//		public:

XXI::~XXI()
{
	cout << "正在删除this XXI" << endl;

	this->DeleteXXI(root_ip);

	cout << "删除this XXI了哦" << endl;
}

XXI::XXI()
{
	Node* root = new Node();

	this->root_ip = root;
}

void XXI::AddList(string* one_list, int one_list_length)
{
	int i;

	if (root_ip->data == "#")
	{
		root_ip->data = one_list[0];
	}

	for (i = 0; i < one_list_length; i++)
	{
		this->AddNode(one_list[i++], one_list[i]);
	}
}


bool XXI::AddNode(string father_data, string want_data)
{
	Node* p;
	Node* node = new Node();

	node->data = want_data;
	p = this->FindNodeIP(father_data);
	if (p == NULL)
	{
		cout << "Error!!! 该节点的father node没找到!!!" << endl;

		return false;
	}
	if (p->left_node_ip == NULL)
	{
		p->left_node_ip = node;

		return true;
	}
	p = p->left_node_ip;
	while (p->right_node_ip != NULL)
	{
		p = p->right_node_ip;
	}
	p->right_node_ip = node;
	return true;
}

bool XXI::AddTXT(string address)
{
	int i;
	int length;
	string infor[100];

	ifstream infile(address, ios::in);
	if (infile.fail())
	{
		cout << "Error!!! this file没找到!!!" << endl;

		return false;
	}
	for (i = 0; !infile.eof(); i++)
	{
		infile >> infor[i];
	}
	length = i;
	infile.close();
	this->AddList(infor, length);
	
	return true;
}

void XXI::DisplayXXI()
{
	cout << "this XXI: ";

	this->DisplayXXI(this->root_ip);

	cout << endl;
}

int XXI::GetNodeGrandsonNodeNum(string want_data)
{
	int num;
	Node* p;

	p = this->FindNodeIP(want_data);
	if (p == NULL)
	{
		cout << "Error!!! this node没找到" << endl;

		return false;
	}
	/*
	for (num = 0, p = p->left_node_ip; p != NULL; p = p->right_node_ip)
	{
		num = num + this->GetNodeSonNodeNum(p);
	}
	
	return num;
	*/
	num = 0;
	num = num + GetNodeGrandsonNodeNum(p->left_node_ip);

	return num;
}

int XXI::GetNodeSonNodeNum(string want_data)
{
	int num;
	Node* p;

	p = this->FindNodeIP(want_data);
	if (p == NULL)
	{
		cout << "Error!!! this node没找到" << endl;

		return false;
	}
	num = 1;
	p = p->left_node_ip;
	num = num + GetNodeSonNodeNum(p->right_node_ip);

	return num;
}

int XXI::GetNodeSonNodeNum(string want_data, int depth)
{
	int num;
	Node* p;

	p = this->FindNodeIP(want_data);
	if (p == NULL)
	{
		cout << "Error! this node没找到" << endl;
		
		return false;
	}
	if (depth < 1)
	{
		cout << "Error! depth不合要求" << endl;

		return false;
	}
	num = this->GetNodeSonNodeNum(p, depth);

	return num;
}

int XXI::GetNodeSonNodeNum(Node* p, int depth)
{
	int num;

	if (p == NULL)
	{
		return 0;
	}
	if (depth != 1)
	{
		num = 0;
		num = num + this->GetNodeSonNodeNum(p->left_node_ip, depth - 1);
		num = num + this->GetNodeSonNodeNum(p->right_node_ip, depth);
		
	}
	num = 0;
	cout << p->data << endl;
	num = num + this->GetNodeSonNodeNum(p);
	num = num + this->GetNodeSonNodeNum(p->right_node_ip);

	return num;
}
