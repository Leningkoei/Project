#include "XXI.h"

int main()
{
	XXI* xxi0 = new XXI();
	
	xxi0->CreatXXI("D:\\MicrosoftVisualStudio\\Project\\C++\\School\\DataStructureTutorial\\Experiment\\07\\10\\10\\UniversityStruct.txt");
	xxi0->DisplayXXI();
	delete xxi0;

	return 0;
}
