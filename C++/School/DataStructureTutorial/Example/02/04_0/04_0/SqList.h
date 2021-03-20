#pragma once
class SqList
{
private:
	int data[10];
	int length;

public:
	SqList();
	~SqList();
	void creat_list(int list[]);
	void display_list();
	void partition1();
	void partition2();
};

