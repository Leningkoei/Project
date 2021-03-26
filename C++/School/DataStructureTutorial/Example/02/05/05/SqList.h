#pragma once

class SqList
{
private:
	int data[5];
	int length;

public:
	~SqList();
	SqList();
	void creat_list(int a[], int n);
	void display_list();
	void change_node_0();
	void change_node_1();
};

