#pragma once

class Node
{
private:
	//�������ɵ����������ݵı���(����ڵ����ݵ�����������int)
	int data;
public:
	//����������1�����ĵ�ַ�ı���
	Node* next_node_ip;
	//��������(����ɾ�����)
	~Node();
	//Ĭ�Ϲ��캯��(��������ͷ�ڵ�head_node)
	Node();
	//�����ݵĹ��캯��(����������data�Ľڵ�)
	Node(int node_data);
	//����data��ֻ���˿�
	int node_data();
};

