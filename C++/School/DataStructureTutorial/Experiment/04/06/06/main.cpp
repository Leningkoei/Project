#include "String.h"
#include <iostream>

using namespace std;

int main()
{
	String* string0 = new String();
	String* string1 = new String();

	char list0[] = { 'a', 'a', 'a', 'b', 'b', 'd', 'a', 'a', 'b', 'b', 'd', 'e' };
	char list1[] = { 'a', 'a', 'b', 'b', 'd' };
	string0->add_list(list0, sizeof(list0) / sizeof(char));
	string1->add_list(list1, sizeof(list1) / sizeof(char));
	cout << "字串t在主串s中出现的次数为: " << string1->kmp_short_string(string0) << endl;
	delete string0;
	delete string1;

	return 0;
}
