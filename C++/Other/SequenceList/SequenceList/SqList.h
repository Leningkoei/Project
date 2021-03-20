#pragma once
class SqList
{
private:
	int data[100];
	int length;

public:
	//默认构造函数(初始化线性表)
	SqList();

	//销毁线性表
	~SqList();

	//由a中的前n项建立顺序表
	void creat_list(int a[], int n);

	//判断线性表是否为空表
	bool list_empty();

	//求线性表的长度
	int list_length();

	//输出线性表
	void display_list();

	//求线性表中的某个数据元素值
	bool get_elem(int i, int& e);

	//按元素值查找
	int locate_elem(int e);

	//插入数据元素
	bool list_insert(int i, int e);

	//删除数据元素
	bool list_delete(int i, int& e);
};

