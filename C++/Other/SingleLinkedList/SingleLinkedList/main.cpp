#include "LinkNode.h"

int main()
{
	LinkNode* node0 = new LinkNode();
	//头插第0次
	node0->first_add_node(0);
	//头插第1次
	node0->first_add_node(1);
	//头插第2次
	node0->first_add_node(2);
	//尾插第0次
	node0->last_add_node(0);
	//尾插第1次
	node0->last_add_node(1);
	//尾插第2次
	node0->last_add_node(2);
	//输出单链表
	node0->display_list();
	
	return 0;
}
