#include "LinkNode.h"

int main()
{
	LinkNode* node0 = new LinkNode();
	//ͷ���0��
	node0->first_add_node(0);
	//ͷ���1��
	node0->first_add_node(1);
	//ͷ���2��
	node0->first_add_node(2);
	//β���0��
	node0->last_add_node(0);
	//β���1��
	node0->last_add_node(1);
	//β���2��
	node0->last_add_node(2);
	//���������
	node0->display_list();
	
	return 0;
}
