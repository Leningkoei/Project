#pragma once
class SqList
{
private:
	int data[100];
	int length;

public:
	//Ĭ�Ϲ��캯��(��ʼ�����Ա�)
	SqList();

	//�������Ա�
	~SqList();

	//��a�е�ǰn���˳���
	void creat_list(int a[], int n);

	//�ж����Ա��Ƿ�Ϊ�ձ�
	bool list_empty();

	//�����Ա�ĳ���
	int list_length();

	//������Ա�
	void display_list();

	//�����Ա��е�ĳ������Ԫ��ֵ
	bool get_elem(int i, int& e);

	//��Ԫ��ֵ����
	int locate_elem(int e);

	//��������Ԫ��
	bool list_insert(int i, int e);

	//ɾ������Ԫ��
	bool list_delete(int i, int& e);
};

