#include "LinkNode.h"

int main()
{
	LinkNode* list0 = new LinkNode();
	//头插第0次
	list0->first_add_node(0);
	//头插第1次
	list0->first_add_node(1);
	//头插第2次
	list0->first_add_node(2);
	//尾插第0次
	list0->last_add_node(0);
	//尾插第1次
	list0->last_add_node(1);
	//尾插第2次
	list0->last_add_node(2);
	//输出单链表
	list0->display_list();
	
	return 0;
}
