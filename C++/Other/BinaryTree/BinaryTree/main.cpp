#include "BinaryTree.h"

int main()
{
	BinaryTree* tree0 = new BinaryTree("A(B(D(, G)), C(E, F))");
	tree0->display_bina_tree();

	delete tree0;

	return 0;
}
