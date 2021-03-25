#include "LinkNode.h"
#include <iostream>

using namespace std;

int main()
{
	//��������(��ʼ��������)
	LinkNode* list0 = new LinkNode();
	LinkNode* list1 = new LinkNode();
	LinkNode* list2 = new LinkNode();
	LinkNode* list3 = new LinkNode();
	LinkNode* list4 = new LinkNode();

	//������0��ֵ
	list0->add_node_last(0);
	list0->add_node_last(2);
	list0->add_node_last(4);
	list0->add_node_last(6);
	list0->add_node_last(8);
	cout << "list0:" << endl;
	//������� = { 0, 2, 4, 6, 8 }
	list0->display_list();

	//������1��ֵ
	list1->add_node_last(1);
	list1->add_node_last(3);
	list1->add_node_last(5);
	list1->add_node_last(7);
	list1->add_node_last(9);
	cout << "list1:" << endl;
	//������� = { 1, 3, 5, 7, 9 }
	list1->display_list();

	//������2��ֵ(�����˴�ʱΪ�յ�����ĵ�����3, ������2 = ������3(�յ�����) + ������1, Ȼ���ڵ�����1�Ļ����ϼ���1���ڵ�ʹ������2��length > ������0)(��ʵ��ʱ�Ѿ���֤����ĿҪ���е�m > n�����)
	list2->merge_list(list3, list1);
	list2->add_node_last(11);
	cout << "list2:" << endl;
	//������� = { 1, 3, 5, 7, 9, 11 }
	list2->display_list();

	//������3 = ������0 + ������1(��֤��ĿҪ���е�m <= n(ȡ������: m == n))
	list3->merge_list(list0, list1);
	cout << "list3:" << endl;
	//������� = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
	list3->display_list();

	//������4 = ������0 + ������2(��֤��ĿҪ���е�m > n)
	list4->merge_list(list0, list2);
	cout << "list4:" << endl;
	//������� = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 }
	list4->display_list();
	
	//ɾ��������
	delete list0;
	delete list1;
	delete list2;
	delete list3;
	delete list4;

	return 0;
}
