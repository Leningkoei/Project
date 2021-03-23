#pragma once

#include <string>

using namespace std;

class NodeData
{
public:
	int no;
	string name;
	int depno;
	int salary;
	~NodeData();
	NodeData();
	NodeData(int node_no, string node_name, int node_depno, int node_sarlary);
	void display_node_data();
};

