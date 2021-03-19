// 例1.15 输入3个字符串, 要求按字母由小到大顺序输出


#include <iostream>
using namespace std;


int main()
{
	string string1, string2, string3, temp;
	cout << "Please input three strings: ";
	cin >> string1 >> string2 >> string3;
	if (string2 > string3)
	{
		temp = string2;
		string2 = string3;
		string3 = temp;
	}
	if (string1 <= string2)
	{
		cout << string1 << " " << string2 << " " << string3 << endl;
	}
	else if (string1 <= string3)
	{
		cout << string1 << " " << string2 << " " << string3 << endl;
	}
	else
	{
		cout << string2 << " " << string3 << " " << string1 << endl;
	}
	return 0;
}