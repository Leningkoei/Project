#pragma once

#include "Stack.h"

class QnPb
{
private:
	int qn_num;

	void BgnNode(int x, int y);

public:
	~QnPb();
	QnPb();
	void AddQnNum(int qn_num);
	void GetAns();
};

