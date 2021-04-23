#pragma once

#include "Node.h"

class XXI
{
private:
	Node* root_ip;

	//		�ϰ���
	void CreatXXI(string* one_list, int one_list_length);
	//		����CreatXXI(string* one_list, int one_list_length), ���ݸ�ʵ�����txt�����ݵĽṹ�����ر��Ż��Ĵ��뷽��(ʵ��������������ַ�������ͻ����, ��Ϊ�������ܻ����)
	//		�ϰ���
	void CreatXXIKai(string* one_list, int one_list_length);
	void DeleteXXI(Node* p);
	//		this->DisplayXXI()�ĵݹ������
	void DisplayXXI(Node* p);
	Node* FindNodeIP(string want_data);
	//		this->FindNodeIP(string want_data)�ĵݹ������
	Node* FindNodeIP(Node* p, string want_data);
	int GetNodeGrandsonNodeNum(Node* p);
	int GetNodeSonNodeNum(Node* p);
	int GetNodeSonNodeNum(Node* p, int depth);

public:
	~XXI();
	XXI();
	void AddList(string* one_list, int one_list_length);
	//		����this->CreatXXI(string* one_list, int one_list_length)��(����ڵ�)���ֵķ���, ����Ϊ���з���
	bool AddNode(string father_data, string want_data);
	bool AddTXT(string txt_address);
	void DisplayXXI();
	int GetNodeSonNodeNum(string want_data);
	int GetNodeGrandsonNodeNum(string want_data);
	int GetNodeSonNodeNum(string want_data, int depth);
};

