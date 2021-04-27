#include "QnPb.h"
#include <iostream>

using namespace std;

//		private:

//		public:

QnPb::~QnPb()
{
	//		cout << "É¾³ýthis queen problemÁËÅ¶" << endl;
}

QnPb::QnPb()
{
	Stack* ans = new Stack();

	this->ans = ans;
	this->qn_num = 8;
}

bool QnPb::Func(int x, int y)
{
	bool result;

	if (x > this->qn_num || y > this->qn_num)
	{
		cout << "Error: x or y out" << endl;

		return false;
	}
	if (x == this->qn_num)
	{
		return false;
	}
	if (y == this->qn_num)
	{
		return true;
	}
	result = this->ans->TvlStack(x, y);
	if (result == false)
	{
		result = this->Func(x + 1, y);
		
		return result;
	}
	this->ans->Push(x, y);
	result = this->Func(0, y + 1);
	if (result == false)
	{
		this->ans->Pop();
		result = this->Func(x + 1, y);
			
		return result;
	}
	if (ans->length == qn_num)
	{
		this->ans->DisplayStack();
	}
	this->ans->Pop();
	result = this->Func(x + 1, y);

	return true;
}

bool QnPb::FuncKai(int x, int y, int &no)
{
	bool result;

	if (x > this->qn_num || y > this->qn_num)
	{
		cout << "Error: x or y out" << endl;

		return false;
	}
	if (x == this->qn_num)
	{
		return false;
	}
	if (y == this->qn_num)
	{
		return true;
	}
	result = this->ans->TvlStack(x, y);
	if (result == false)
	{
		result = this->FuncKai(x + 1, y, no);

		return false;
	}
	this->ans->Push(x, y);
	result = this->FuncKai(0, y + 1, no);
	if (result == false)
	{
		this->ans->Pop();
		result = this->FuncKai(x + 1, y, no);

		return false;
	}
	if (ans->length == qn_num)
	{
		no++;
//		cout << "no: " << no++;
//		this->ans->DisplayStack();
	}
	this->ans->Pop();
	result = this->FuncKai(x + 1, y, no);

	return false;
}

void QnPb::GetAns(int x, int y)
{
//	int pre_x;
	bool result;

	result = this->Func(x, y);
/*
	if (result == true)
	{
		Stack* ans = new Stack();
		
		this->ans->DisplayStack();
		pre_x = this->ans->data[0]->x;
		delete this->ans;
		this->ans = ans;
		this->GetAns(pre_x + 1, 0);
	}
*/
}

void QnPb::GetAns()
{
	int no;

	no = 0;
	this->FuncKai(0, 0, no);
	cout << no;
}

void QnPb::SetQnNum(int qn_num)
{
	this->qn_num = qn_num;
}
