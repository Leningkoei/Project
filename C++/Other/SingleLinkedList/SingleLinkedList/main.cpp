#include "LinkNode.h"

int main()
{
	LinkNode* node0 = new LinkNode();
	node0->add_node_f(0);
	node0->add_node_f(1);
	node0->add_node_f(2);
	node0->display_list();
	return 0;
}
