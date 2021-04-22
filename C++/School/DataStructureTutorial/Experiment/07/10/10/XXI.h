#pragma once

#include "Node.h"

class XXI
{
private:
	Node* root_ip;

	void CreatXXI(string* one_list, int one_list_length);
	void CreatXXIKai(string* one_list, int one_list_length);
	void DisplayXXI(Node* p);
	Node* FindNodeIP(Node* p, string want_data);

public:
	~XXI();
	XXI();
	bool CreatXXI(string txt_address);
	void DisplayXXI();
	Node* FindNodeIP(string want_data);
};

