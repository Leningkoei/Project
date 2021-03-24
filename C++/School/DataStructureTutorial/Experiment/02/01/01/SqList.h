#pragma once

class SqList
{
private:
	char data[5];
	int length;

public:
	SqList();
	~SqList();
	void creat_list(char a[], int n);
	void display_list();
	int list_length();
	bool list_empty();
	bool get_elem(int i, char& e);
	int locate_elem(char e);
	bool node_insert(int i, char e);
	bool node_delete(int i, char& e);
	
};

