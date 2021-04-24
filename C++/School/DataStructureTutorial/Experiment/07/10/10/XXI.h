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
	//		this->GetNodeGrandsonNodeNum(string want_data)�ĵݹ������
	//		�ϰ���
	int GetNodeGrandsonNodeNum(Node* p);
	//		this->GetNodeSonNodeNum(string want_data, int depth)�ĵݹ������
	int GetNodeSonNodeNum(Node* p, int depth);
	//		���pָ��Ľ�㿪ʼ�Ķ���(����pָ��Ľ�����ڵ��Ҳ����н��)
	int GetNodeStartDegree(Node* p);
	int GetNodeStudentNum(Node* p);

public:
	~XXI();
	XXI();
	void AddList(string* one_list, int one_list_length);
	//		����this->CreatXXI(string* one_list, int one_list_length)��(����ڵ�)���ֵķ���
	bool AddNode(string father_data, string want_data);
	bool AddTXT(string txt_address);
	void DisplayXXI();
	//		�ϰ���
	int GetNodeGrandsonNodeNum(string want_data);
	//		�ϰ���(����˵����Ϊthis->GetNodeSonNodeNum(string want_data, int depth)������, Ĭ�ϵ�depth == 1)
	int GetNodeSonNodeNum(string want_data);
	//		��ͨ��depth���Ƶݹ����, ����ȡ����this->GetNodeGrandsonNodeNum(string want_data)��GetNodeSonNodeNum(string want_data)
	int GetNodeSonNodeNum(string want_data, int depth);
	int GetNodeStudentNum(string want_data);
};

