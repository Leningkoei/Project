#pragma once

#include "Node.h"

class XXI
{
private:
	Node* root_ip;

	void CreatXXI(string* one_list, int one_list_length);
	//	���ݸ�ʵ������txt�ṹ�����ر��Ż��Ĵ��뷽��(ʵ��������������ַ�������ͻ����, ��Ϊ�������ܻ����)
	void CreatXXIKai(string* one_list, int one_list_length);
	void AddTXT(string* one_list, int one_list_length);
	void DeleteXXI(Node* p);
	void DisplayXXI(Node* p);
	Node* FindNodeIP(Node* p, string want_data);

public:
	~XXI();
	XXI();
	bool AddNode(string father_data, string want_data);
	bool AddTXT(string txt_address);
	void DisplayXXI();
	Node* FindNodeIP(string want_data);
};

