#include "LinkNode.h"
#include <iostream>

using namespace std;

int main()
{
	LinkNode* list0 = new LinkNode();
	LinkNode* list1 = new LinkNode();
	LinkNode* list2 = new LinkNode();
	LinkNode* list3 = new LinkNode();
	LinkNode* list4 = new LinkNode();
	LinkNode* list5 = new LinkNode();

	cout << "���������0" << endl;
	list0->add_node_last(0);
	list0->add_node_last(1);
	list0->add_node_last(2);
	list0->display_list();

	cout << endl;

	cout << "���������1" << endl;
	list1->add_node_last(6);
	list1->add_node_last(5);
	list1->add_node_last(4);
	list1->add_node_last(3);
	list1->display_list();

	cout << endl;

	cout << "����÷���0�ϲ��ĵ�����0��1" << endl;
	list2->merge_list(list0, list1);
	list2->display_list();

	cout << endl;

	cout << "����øĽ�����1�Ͳ��ĵ�����0��1" << endl;
	list3->merge_list_kai(list0, list1);
	list3->display_list();

	cout << endl;

	cout << "�����ͼ�÷���0�ϲ��ĵ�����0��4(����)" << endl;
	list4->merge_list(list0, list4);
	list4->display_list();

	cout << endl;

	cout << "�����ͼ�øĽ�����1�ϲ��ĵ�����0��5(����)" << endl;
	list5->merge_list_kai(list0, list5);
	list5->display_list();

	return 0;
}