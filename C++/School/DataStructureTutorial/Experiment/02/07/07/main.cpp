#include "LinkNode.h"
#include <iostream>

using namespace std;

int main()
{
	//声明变量(初始化单链表)
	LinkNode* list0 = new LinkNode();
	LinkNode* list1 = new LinkNode();
	LinkNode* list2 = new LinkNode();
	LinkNode* list3 = new LinkNode();
	LinkNode* list4 = new LinkNode();

	//单链表0赋值
	list0->add_node_last(0);
	list0->add_node_last(2);
	list0->add_node_last(4);
	list0->add_node_last(6);
	list0->add_node_last(8);
	cout << "list0:" << endl;
	//理论输出 = { 0, 2, 4, 6, 8 }
	list0->display_list();

	//单链表1赋值
	list1->add_node_last(1);
	list1->add_node_last(3);
	list1->add_node_last(5);
	list1->add_node_last(7);
	list1->add_node_last(9);
	cout << "list1:" << endl;
	//理论输出 = { 1, 3, 5, 7, 9 }
	list1->display_list();

	//单链表2赋值(借用了此时为空单链表的单链表3, 单链表2 = 单链表3(空单链表) + 单链表1, 然后在单链表1的基础上加上1个节点使单链表2的length > 单链表0)(其实此时已经验证了题目要求中的m > n的情况)
	list2->merge_list(list3, list1);
	list2->add_node_last(11);
	cout << "list2:" << endl;
	//理论输出 = { 1, 3, 5, 7, 9, 11 }
	list2->display_list();

	//单链表3 = 单链表0 + 单链表1(验证题目要求中的m <= n(取了特殊: m == n))
	list3->merge_list(list0, list1);
	cout << "list3:" << endl;
	//理论输出 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 }
	list3->display_list();

	//单链表4 = 单链表0 + 单链表2(验证题目要求中的m > n)
	list4->merge_list(list0, list2);
	cout << "list4:" << endl;
	//理论输出 = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11 }
	list4->display_list();
	
	//删除单链表
	delete list0;
	delete list1;
	delete list2;
	delete list3;
	delete list4;

	return 0;
}
