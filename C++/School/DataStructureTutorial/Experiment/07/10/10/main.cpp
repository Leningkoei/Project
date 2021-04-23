#include "XXI.h"
#include <iostream>

using namespace std;

int main()
{
	XXI* xxi0 = new XXI();
	
	//		(1), (2)
	//		(2)的结果融入在XXI::AddTXT(string address)中了
	//		把大学结构和学生人数分开存储为txt了, 合并起来也是可以的, 运行时注意地址是否正确
	xxi0->AddTXT("D:\\MicrosoftVisualStudio\\Project\\C++\\School\\DataStructureTutorial\\Experiment\\07\\10\\10\\UniversityStruct.txt");
	xxi0->AddTXT("D:\\MicrosoftVisualStudio\\Project\\C++\\School\\DataStructureTutorial\\Experiment\\07\\10\\10\\StudentNumber.txt");
	xxi0->DisplayXXI();
	cout << "========" << endl;
	cout << "计算机学院的专业数: " << xxi0->GetNodeSonNodeNum("计算机学院", 2) << endl;
	cout << "计算机学院的班数: " << xxi0->GetNodeGrandsonNodeNum("计算机学院") << endl;
	delete xxi0;

	return 0;
}
