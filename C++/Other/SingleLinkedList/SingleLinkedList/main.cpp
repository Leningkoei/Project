#include "LinkNode.h"

int main()
{
	LinkNode* list0 = new LinkNode();
	//ͷ���0��
	list0->first_add_node(0);
	//ͷ���1��
	list0->first_add_node(1);
	//ͷ���2��
	list0->first_add_node(2);
	//β���0��
	list0->last_add_node(0);
	//β���1��
	list0->last_add_node(1);
	//β���2��
	list0->last_add_node(2);
	//���������
	list0->display_list();
	
	return 0;
}
