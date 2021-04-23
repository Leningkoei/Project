#pragma once

#include "Node.h"

class XXI
{
private:
	Node* root_ip;

	//		废案了
	void CreatXXI(string* one_list, int one_list_length);
	//		基于CreatXXI(string* one_list, int one_list_length), 根据该实验存入txt的数据的结构特性特别优化的存入方法(实际上如果不用这种方法存入就会出错, 因为人数可能会相等)
	//		废案了
	void CreatXXIKai(string* one_list, int one_list_length);
	void DeleteXXI(Node* p);
	//		this->DisplayXXI()的递归调用型
	void DisplayXXI(Node* p);
	Node* FindNodeIP(string want_data);
	//		this->FindNodeIP(string want_data)的递归调用型
	Node* FindNodeIP(Node* p, string want_data);
	int GetNodeGrandsonNodeNum(Node* p);
	int GetNodeSonNodeNum(Node* p);
	int GetNodeSonNodeNum(Node* p, int depth);

public:
	~XXI();
	XXI();
	void AddList(string* one_list, int one_list_length);
	//		基于this->CreatXXI(string* one_list, int one_list_length)的(存入节点)部分的方法, 仅作为公有方法
	bool AddNode(string father_data, string want_data);
	bool AddTXT(string txt_address);
	void DisplayXXI();
	int GetNodeSonNodeNum(string want_data);
	int GetNodeGrandsonNodeNum(string want_data);
	int GetNodeSonNodeNum(string want_data, int depth);
};

