#include "XXI.h"
#include <fstream>
#include <iostream>

using namespace std;

XXI::~XXI()
{
	///	Todo;
}

XXI::XXI()
{
	Node* root = new Node();

	this->root_ip = root;
}

//	private:

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
		if (i % 2 != 0)
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

void XXI::DisplayXXI()
{
	cout << "this XXI: ";

	this->DisplayXXI(this->root_ip);

	cout << endl;
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

//	public:
bool XXI::CreatXXI(string txt_address)
{
	int i;
	int length;
	string infor[100];

	ifstream infile(txt_address, ios::in);
	if (infile.fail())
	{
		cout << "Error!!!" << endl;

		return false;
	}
	for (i = 0; !infile.eof(); i++)
	{
		infile >> infor[i];
	}
	length = i;
	infile.close();
	this->CreatXXIKai(infor, length);
	for (i = 0; i < length; i++)
	{
		cout << infor[i] << endl;
	}
	
	return true;
}
