#include "LinkNode.h"

int main()
{
	LinkNode* list0 = new LinkNode();
	//头插第0次
	list0->add_node_first(0);
	//头插第1次
	list0->add_node_first(1);
	//头插第2次
	list0->add_node_first(2);
	//尾插第0次
	list0->add_node_last(0);
	//尾插第1次
	list0->add_node_last(1);
	//尾插第2次
	list0->add_node_last(2);
	//输出单链表
	list0->display_list();

	delete list0;
	
	return 0;
}
