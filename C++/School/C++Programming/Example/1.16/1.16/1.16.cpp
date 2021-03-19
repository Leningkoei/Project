// 例1.16 开辟空间以存放一个结构体变量


#include <iostream>
#include <string.h>
using namespace std;


struct Student
{
	char name[10];
	int num;
	char sex;
};


int main()
{
	Student* p;
	p = new Student;
	strcpy_s(p->name, "Wang Yun");
	p->num = 10123;
	p->sex = 'M';
	cout << p->name << " " << p->num << " " << p->sex << endl;
	delete p;
	return 0;
}