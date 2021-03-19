#include "String.h"
#include <iostream>

using namespace std;

void stringcompare(String& string1,String& string2)
{
	if (string1 > string2)
	{
		string1.display();
		cout << ">";
		string2.display();
		cout << endl;
	}

	else if (string1 < string2)
	{
		string1.display();
		cout << "<";
		string2.display();
		cout << endl;
	}

	else
	{
		string1.display();
		cout << "==";
		string2.display();
		cout << endl;
	}
}

bool operator>(String& string1, String& string2)
{
	if (strcmp(string1.p, string2.p) > 0)
	{
		return true;
	}

	else
	{
		return false;
	}
}

bool operator<(String& string1, String& string2)
{
	if (strcmp(string1.p, string2.p))
	{
		return true;
	}

	else
	{
		return false;
	}
}

bool operator==(String& string1, String& string2)
{
	if (strcmp(string1.p, string2.p))
	{
		return true;
	}

	else
	{
		return false;
	}
}

int main()
{
	String string1("Hello");
	String string2("Book");

	cout << "string1 = ";
	string1.display();
	cout << endl;
	cout << "string2 = ";
	string2.display();
	cout << endl;

	stringcompare(string1, string2);
	stringcompare(string2, string1);
	stringcompare(string1, string1);

	return 0;
}