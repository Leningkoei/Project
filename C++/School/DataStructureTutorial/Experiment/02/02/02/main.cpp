#include "LinkNode.h"
#include <iostream>

using namespace std;

int main()
{
	//(1)
	LinkNode* list0 = new LinkNode();

	//(2)
	list0->add_node_last('a');
	list0->add_node_last('b');
	list0->add_node_last('c');
	list0->add_node_last('d');
	list0->add_node_last('e');
	//(3)
	list0->display_list();
	//(4)
	list0->display_list_length();
	//(5)
	if (list0->empty() == false)
	{
		cout << "this list 不是空表" << endl;
	}
	//(6)
	cout << "this list 3rd node data = ";
	display_node_data(list0->find_node(3));
	//(7)
	cout << "this list 'a' is in: ";
	list0->display_node_no(list0->find_node('a'));
	//(8)
	if (list0->add_node(4, 'f') == true)
	{
		cout << "插入'f'作为4成功" << endl;
	}
	//(9)
	list0->display_list();
	//(10)
	if (list0->delete_node(3) == true)
	{
		cout << "删除3号结点成功" << endl;
	}
	//(11)
	list0->display_list();
	//(12)
	delete list0;

	return 0;
}
