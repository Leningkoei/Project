#include <fstream>
#include <iostream>
#include <string>

using namespace std;

int main()
{
	int i;
	int length;
	string list0[10];

	ifstream infile("D:\\MicrosoftVisualStudio\\Project\\C++\\Other\\ReadTXT\\ReadTXT\\test.txt", ios::in);
	if (infile.fail())
	{
		cout << "Error!!!" << endl;
		return 0;
	}
	for (i = 0; !infile.eof(); i++)
	{
		infile >> list0[i];
	}
	length = i;
	infile.close();

	for (i = 0; i < length; i++)
	{
		cout << list0[i];
	}

	return 0;
}
