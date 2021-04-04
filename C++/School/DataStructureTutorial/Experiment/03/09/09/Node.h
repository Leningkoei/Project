#pragma once

class Node
{
private:
	int arrive_time;

public:
	~Node();
	Node();
	Node(int time);
	int node_arrive_time();
};

