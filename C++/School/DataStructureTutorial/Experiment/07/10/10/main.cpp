#include "XXI.h"
#include <iostream>

using namespace std;

int main()
{
	XXI* xxi0 = new XXI();
	
	//		(1), (2)
	//		(2)�Ľ��������XXI::AddTXT(string address)����
	//		�Ѵ�ѧ�ṹ��ѧ�������ֿ��洢Ϊtxt��, �ϲ�����Ҳ�ǿ��Ե�, ����ʱע���ַ�Ƿ���ȷ
	xxi0->AddTXT("D:\\MicrosoftVisualStudio\\Project\\C++\\School\\DataStructureTutorial\\Experiment\\07\\10\\10\\UniversityStruct.txt");
	xxi0->AddTXT("D:\\MicrosoftVisualStudio\\Project\\C++\\School\\DataStructureTutorial\\Experiment\\07\\10\\10\\StudentNumber.txt");
	xxi0->DisplayXXI();
	cout << "========" << endl;
	cout << "�����ѧԺ��רҵ��: " << xxi0->GetNodeSonNodeNum("�����ѧԺ", 2) << endl;
	cout << "�����ѧԺ�İ���: " << xxi0->GetNodeGrandsonNodeNum("�����ѧԺ") << endl;
	delete xxi0;

	return 0;
}
