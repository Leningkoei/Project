#include "LinkNode.h"
#include <iostream>

using namespace std;

int main()
{
	cout << "��ʼ�������1��ԭ������" << endl;
	LinkNode* list0 = new LinkNode();
	list0->add_node_first(NodeData(0, "name0", 4, 2));
	list0->add_node_first(NodeData(1, "name1", 3, 3));
	list0->add_node_first(NodeData(2, "name2", 2, 4));
	list0->add_node_first(NodeData(3, "name3", 1, 5));
	list0->display_list();
	cout << endl;

	cout << "����no��������" << endl;
	list0->sort_no_plus();
	list0->display_list();
	cout << endl;
	cout << "����depno��������" << endl;
	list0->sort_depno_plus();
	list0->display_list();
	cout << endl;
	cout << "����salary��������" << endl;
	list0->sort_salary_plus();
	list0->display_list();
	cout << endl;

	cout << "ɾ��1�����ڵĽڵ�" << endl;
	list0->delete_node_no(0);
	list0->display_list();
	cout << endl;
	cout << "ɾ��1��(�Ѿ�)�����ڵĽڵ�" << endl;
	list0->delete_node_no(0);
	list0->display_list();

	list0->write_list();

	delete list0;

	return 0;
}
