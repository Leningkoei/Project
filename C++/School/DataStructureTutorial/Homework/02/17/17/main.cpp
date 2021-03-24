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

	cout << "输出单链表0" << endl;
	list0->add_node_last(0);
	list0->add_node_last(1);
	list0->add_node_last(2);
	list0->display_list();

	cout << endl;

	cout << "输出单链表1" << endl;
	list1->add_node_last(6);
	list1->add_node_last(5);
	list1->add_node_last(4);
	list1->add_node_last(3);
	list1->display_list();

	cout << endl;

	cout << "输出用方法0合并的单链表0和1" << endl;
	list2->merge_list(list0, list1);
	list2->display_list();

	cout << endl;

	cout << "输出用改进方法1和并的单链表0和1" << endl;
	list3->merge_list_kai(list0, list1);
	list3->display_list();

	cout << endl;

	cout << "输出试图用方法0合并的单链表0和4(自身)" << endl;
	list4->merge_list(list0, list4);
	list4->display_list();

	cout << endl;

	cout << "输出试图用改进方法1合并的单链表0和5(自身)" << endl;
	list5->merge_list_kai(list0, list5);
	list5->display_list();

	return 0;
}