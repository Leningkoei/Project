#include "QnPb.h"

//		private:

void QnPb::BgnNode(int x, int y)
{
	Stack* stack = new Stack();

	stack->AddNode(x, y);
}

//		public:

QnPb::~QnPb()
{
	//		TODO
}

QnPb::QnPb()
{
	this->qn_num = 8;
}

void QnPb::AddQnNum(int qn_num)
{
	this->qn_num = qn_num;
}

void QnPb::GetAns()
{
	//		TODO
}
