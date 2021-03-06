#include "LinkNode.h"

int main()
{
	Node* p;
	LinkNode* list0 = new LinkNode();
	LinkNode* list1 = new LinkNode();
	LinkNode* list2 = new LinkNode();

	list0->first_add_node(2);
	list0->first_add_node(0);
	list0->first_add_node(1);
	list0->first_add_node(3);
	p = list0->find_node(1);
	list0->display_node(p);
	p = list0->find_node(9);
	list0->display_node(p);

	list1->first_add_node(4);
	list1->first_add_node(2);
	list1->first_add_node(1);
	list1->first_add_node(0);
	p = list1->find_node_kai_kou(4);
	list1->display_node(p);
	p = list1->find_node_kai_kou(3);
	list1->display_node(p);
	p = list1->find_node_kai_kou(9);
	list1->display_node(p);

	list2->first_add_node(-1);
	list2->first_add_node(1);
	list2->first_add_node(2);
	list2->first_add_node(3);
	p = list2->find_node_kai_otsu(-1);
	list2->display_node(p);
	p = list2->find_node_kai_otsu(0);
	list2->display_node(p);
	p = list2->find_node_kai_otsu(9);
	list2->display_node(p);

	return 0;
}