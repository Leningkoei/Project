#include "NodeData.h"
#include <iostream>
#include <fstream>

using namespace std;

NodeData::~NodeData()
{
//	cout << "Îö¹¹ÁËNodeDataÅ¶" << endl;
}

NodeData::NodeData()
{
	no = -1;
	name = "NM$L";
	depno = -1;
	salary = -1;
}

NodeData::NodeData(int node_no, string node_name, int node_depno, int node_salary)
{
	no = node_no;
	name = node_name;
	depno = node_depno;
	salary = node_salary;
}

void NodeData::display_node_data()
{
	cout << "no: " << no << endl;
	cout << "name: " << name << endl;
	cout << "depno: " << depno << endl;
	cout << "salary: " << salary << endl;
}
