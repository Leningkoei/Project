#include "Node.h"
#include <cstdio>

Node::Node()
{
	//ͷ�ڵ��data��Ϊ0(ʵ���ϲ������)
	data = 0;
	//ͷ�ڵ����1���ڵ�ĵ�ַnext_ip��ʼ��ΪNULL(��ֵ�� == first_ip, ��ʼ��ʱ��Ϊû���׽ڵ�first_node���Գ�ʼ��ΪNULL)
	next_node_ip = NULL;
}

Node::Node(int node_data)
{
	//data�нӽڵ�����
	data = node_data;
	//next_ip��ʼ��ΪNULL, ����LinkNode�����޸�
	next_node_ip = NULL;
}
