#include "LinkNode.h"

int main()
{
	LinkNode* list0 = new LinkNode();
	//ͷ���0��
	list0->add_node_first(0);
	//ͷ���1��
	list0->add_node_first(1);
	//ͷ���2��
	list0->add_node_first(2);
	//β���0��
	list0->add_node_last(0);
	//β���1��
	list0->add_node_last(1);
	//β���2��
	list0->add_node_last(2);
	//���������
	list0->display_list();

	delete list0;
	
	return 0;
}
