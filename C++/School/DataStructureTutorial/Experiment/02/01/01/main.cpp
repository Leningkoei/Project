#include "SqList.h"
#include <iostream>

using namespace std;

int main()
{
	char a[5] = { 'a', 'b', 'c', 'd', 'e' };
	char e = '0';
	//(1)
	SqList* list0 = new SqList();
	//(2)
	list0->creat_list(a, 5);
	//(3)
	list0->display_list();
	//(4)
	cout << "length = " << list0->list_length() << endl;
	//(5)
	if (list0->list_empty() == false)
	{
		cout << "false" << endl;
	}
	//(6)
	if (list0->get_elem(3, e) == true)
	{
		cout << "第3个元素的值: " << e << endl;
	}
	//(7)
	cout << "a的位置: " << list0->locate_elem('a') << endl;
	//(8)
	list0->node_insert(4, 'f');
	//(9)
	list0->display_list();
	//(10)
	list0->node_delete(3, e);
	cout << "被删除的第3个元素的值: " << e << endl;
	//(11)
	list0->display_list();
	//(12)
	delete list0;

	return 0;
}