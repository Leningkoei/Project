#pragma once

#include "Node.h"

class XXI
{
private:
	Node* root_ip;

	void CreatXXI(string* one_list, int one_list_length);
	//	根据该实验存入的txt结构特性特别优化的存入方法(实际上如果不用这种方法存入就会出错, 因为人数可能会相等)
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

