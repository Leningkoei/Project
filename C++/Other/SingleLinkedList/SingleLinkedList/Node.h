#pragma once

#include <string>

using namespace std;

class Node
{
public:
	//Ĭ�Ϲ��캯��(��������ͷ�ڵ�head_node)
	Node();
	//�������ɵ����������ݵı���(����ڵ����ݵ�����������int)
	int data;
	//����������1�����ĵ�ַ�ı���
	Node* next_node_ip;
	//�����ݵĹ��캯��(����������data�Ľڵ�)
	Node(int node_data);
};

