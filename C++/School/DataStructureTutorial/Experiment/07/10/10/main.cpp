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
	//		(3)
	xxi0->DisplayXXI();
	//		(4)
	cout << "�����ѧԺ��רҵ��: " << xxi0->GetNodeSonNodeNum("�����ѧԺ", 1) << endl;
	//		(5)
	cout << "�����ѧԺ�İ༶��: " << xxi0->GetNodeSonNodeNum("�����ѧԺ", 2) << endl;
	//		(6)
	cout << "����ѧԺ��ѧ����: " << xxi0->GetNodeStudentNum("����ѧԺ") << endl;
	/*		���鲿��
	cout << "�����ѧԺ��רҵ��: " << xxi0->GetNodeSonNodeNum("�����ѧԺ") << endl;
	cout << "�л���ѧ�İ���: " << xxi0->GetNodeSonNodeNum("�л���ѧ", 3) << endl;
	cout << "����ѧԺ�İ���: " << xxi0->GetNodeSonNodeNum("����ѧԺ", 2) << endl;
	cout << "�����ѧԺ�İ���: " << xxi0->GetNodeGrandsonNodeNum("�����ѧԺ") << endl;
	cout << "�л���ѧ��ѧ����: " << xxi0->GetNodeStudentNum("�л���ѧ") << endl;
	cout << "�����ѧԺ��ѧ����: " << xxi0->GetNodeStudentNum("�����ѧԺ") << endl;
	cout << "����ѧԺ��ѧ����: " << xxi0->GetNodeStudentNum("����ѧԺ") << endl;
	cout << "�л���ѧ��ѧ����: " << xxi0->GetNodeStudentNum("�����ѧԺ") + xxi0->GetNodeStudentNum("����ѧԺ") << endl;
	*/
	//		(7)
	delete xxi0;

	return 0;
}
