#pragma once

#include "Node.h"

class LinkNode
{
private:
	//�����н�ͷ���ĵ�ַ�ı���
	Node* head_node_ip;
	//�����н��׽ڵ�ĵ�ַ�ı���(��ֵ�� == head_ip->next_ip)
	Node* first_node_ip;
	//�����н�β�ڵ�ĵ�ַ�ı���
	Node* last_node_ip;
	//�����нӵ������ĳ��ȵı���
	int length;

public:
	//Ĭ�Ϲ��캯��(��ʼ��������(����ͷ�ڵ�head_node, ��head_node�ĵ�ַ����head_node_ip, ��ʼ����������)
	LinkNode();
	//���½ڵ����Ϊ�׽ڵ�
	void first_add_node(int node_data);
	//���½ڵ����Ϊβ�ڵ�
	void last_add_node(int node_data);
	//���������
	void display_list();
};
