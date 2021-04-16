#include "String.h"
#include <iostream>

using namespace std;

int main()
{
	char list0[26] = { 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' };
	char list1[26] = { 'n', 'g', 'z', 'q', 't', 'c', 'o', 'b', 'm', 'u', 'h', 'e', 'l', 'k', 'p', 'd', 'a', 'w', 'x', 'f', 'y', 'i', 'v', 'r', 's', 'j' };
	char list2[] = { 'e', 'n', 'c', 'r', 'y', 'p', 't' };
	String* string0 = new String();
	String* string1 = new String();
	String* string2 = new String();
	String* string3 = new String();
	String* string4 = new String();

	string0->add_list(list0, 26);
	string1->add_list(list1, 26);
	string2->add_list(list2, 7);
	//	加密
	string3 = string2->get_password_string(string0, string1);
	string3->display_string();
	//	解密(将加密后的密码串以模板串为标准串, 标准串为模板串进行反向加密得到原始串)
	string4 = string3->get_password_string(string1, string0);
	string4->display_string();

	delete string0;
	delete string1;

	return 0;
}
