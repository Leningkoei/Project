#pragma once
class SqList
{
private:
	int data[100];
	int length;

public:
	//由a中的前n项建立顺序表
	void create_list(int a[], int n);
};

