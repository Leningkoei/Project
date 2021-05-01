#include "XXI.h"
#include <iostream>

using namespace std;

int main()
{
	//		XXI* xxi0 = new XXI();
	//		操还能这样
	XXI* xxi0;
	
	xxi0 = new XXI();
	//		我对象也优雅起来了, 以前都避免赋值构造函数来着了太蠢了
	
	//		(1), (2)
	//		(2)的结果融入在XXI::AddTXT(string address)中了
	//		把大学结构和学生人数分开存储为txt了, 合并起来也是可以的, 运行时注意地址是否正确
	//		更新: 改成相对地址了, 以后会避免使用绝对地址
	xxi0->AddTXT("UniversityStruct.txt");
	xxi0->AddTXT("StudentNumber.txt");
	//		over
	//		(3)
	xxi0->DisplayXXI();
	//		(4)
	cout << "计算机学院的专业数: " << xxi0->GetNodeSonNodeNum("计算机学院", 1) << endl;
	//		(5)
	cout << "计算机学院的班级数: " << xxi0->GetNodeSonNodeNum("计算机学院", 2) << endl;
	//		(6)
	cout << "电信学院的学生数: " << xxi0->GetNodeStudentNum("电信学院") << endl;
	/*		检验部分
	cout << "计算机学院的专业数: " << xxi0->GetNodeSonNodeNum("计算机学院") << endl;
	cout << "中华大学的班数: " << xxi0->GetNodeSonNodeNum("中华大学", 3) << endl;
	cout << "电信学院的班数: " << xxi0->GetNodeSonNodeNum("电信学院", 2) << endl;
	cout << "计算机学院的班数: " << xxi0->GetNodeGrandsonNodeNum("计算机学院") << endl;
	cout << "中华大学的学生数: " << xxi0->GetNodeStudentNum("中华大学") << endl;
	cout << "计算机学院的学生数: " << xxi0->GetNodeStudentNum("计算机学院") << endl;
	cout << "电信学院的学生数: " << xxi0->GetNodeStudentNum("电信学院") << endl;
	cout << "中华大学的学生数: " << xxi0->GetNodeStudentNum("计算机学院") + xxi0->GetNodeStudentNum("电信学院") << endl;
	*/
	//		(7)
	delete xxi0;

	return 0;
}
