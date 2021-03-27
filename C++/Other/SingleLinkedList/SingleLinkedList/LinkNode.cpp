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

	cout << "ɾ��this list��Ŷ" << endl;
}

LinkNode::LinkNode()
{
	//����1���½ڵ�head_node
	Node* head_node = new Node();
	//head_node_ip�н�head_node�ĵ�ַ
	head_node_ip = head_node;
	//first_ip��ʼ��ΪNULL
	first_node_ip = NULL;
	//last_ip��ʼ��ΪNULL
	last_node_ip = head_node;
	//length��ʼ��Ϊ0
	length = 0;
}

//���½ڵ���Ϊ�׽ڵ����
void LinkNode::add_node_first(int node_data)
{
	//����1�������ݵ��½ڵ�node
	Node* node = new Node(node_data);
	//��ԭ�׽ڵ�ĵ�ַ��Ϊ�²��׽ڵ����1���ڵ�ĵ�ַ
	node->next_node_ip = head_node_ip->next_node_ip;
	//���²�ڵ�ĵ�ַ��Ϊ��ͷ�ڵ����1���ڵ�ĵ�ַ
	head_node_ip->next_node_ip = node;
	//���²�ڵ�ĵ�ַ��Ϊ����ͷ�ڵ�ĵ�ַ
	first_node_ip = node;
	//�����ʱ��������Ϊ0(������²�ڵ��ǵ�1���ڵ�)
	if (length == 0)
	{
		//���²�ڵ�ĵ�ַ��Ϊβ�ڵ�ĵ�ַ
		last_node_ip = node;
	}
	//������������1
	length++;
}

//���½ڵ���Ϊβ�ڵ����
void LinkNode::add_node_last(int node_data)
{
	//����1�������ݵ��½ڵ�node
	Node* node = new Node(node_data);
	//���²�ڵ�ĵ�ַ��Ϊԭβ�ڵ����1���ڵ�ĵ�ַ
	last_node_ip->next_node_ip = node;
	//���²�ڵ�ĵ�ַ��Ϊ�µ�β�ڵ�ĵ�ַ
	last_node_ip = node;
	if (length == 0)
	{
		first_node_ip = node;
	}
	//������������1
	length++;
}

void LinkNode::display_list()
{
	int i = 0;
	cout << "length = " << length << endl;
	//����������1��ָ���׽ڵ�ĵ�ַ��ָ��
	Node* p = first_node_ip;
	//�����ָ�벻ָ��յ�ַ
	while (p != NULL)
	{
		//����õ�ַ�½ڵ������
		cout << i << ": " << p->node_data() << endl;
		//��pָ����1���ڵ�ĵ�ַ
		p = p->next_node_ip;
		i++;
	}
}
