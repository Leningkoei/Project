#pragma once

class SqList
{
private:
	int data[10] = { 0 };
	int length = 10;

public:
	SqList(int list[]);
	void display_list();
	void fun0();
	void fun1();
};

