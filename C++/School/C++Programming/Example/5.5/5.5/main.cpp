#include "Student1.h"

int main()
{
	Student1 student1(10010, "Wang-Li", 'f', 19, "Beijing Road");
	Student1 student2(10011, "Li-Wang", 'm', 21, "Shanghai Street");

	student1.display();
	student2.display();

	return 0;
}