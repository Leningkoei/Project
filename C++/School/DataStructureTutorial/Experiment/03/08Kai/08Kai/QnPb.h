#pragma once

#include "Stack.h"

class QnPb
{
private:
	Stack* ans;
	int qn_num;
	
public:
	~QnPb();
	QnPb();
	bool Func(int x, int y);
	bool FuncKai(int x, int y, int &no);
	void GetAns();
	void GetAns(int x, int y);
	void SetQnNum(int qn_num);
};

