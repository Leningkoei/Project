#include "QnPb.h"
#include <iostream>

using namespace std;

int main()
{
	QnPb* qn_pb_0 = new QnPb();

	qn_pb_0->SetQnNum(15);
	qn_pb_0->GetAns();
	delete qn_pb_0;

	return 0;
}
