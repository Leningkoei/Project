#pragma once

class Node
{
public:
	//�������ɵ����������ݵı���(����ڵ����ݵ�����������int)
	int data;
	//����������1�����ĵ�ַ�ı���
	Node* next_node_ip;
	//Ĭ�Ϲ��캯��(��������ͷ�ڵ�head_node)
	Node();
	//�����ݵĹ��캯��(����������data�Ľڵ�)
	Node(int node_data);
};

