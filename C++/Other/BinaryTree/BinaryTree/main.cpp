#include "BinaryTree.h"
#include <iostream>

using namespace std;

int main()
{
	BinaryTree* tree0 = new BinaryTree("A(B(D(, G)), C(E, F))");
	
	tree0->display_bina_tree();
	cout << endl;
	cout << "want node imformation:" << endl;
	tree0->find_node_ip('F')->display_node();
	cout << endl;
	cout << "this binary tree length: " << tree0->get_bina_tree_length() << endl;
	cout << endl;
	cout << "want node level: " << tree0->find_node_level('E') << endl;

	delete tree0;

	return 0;
}
