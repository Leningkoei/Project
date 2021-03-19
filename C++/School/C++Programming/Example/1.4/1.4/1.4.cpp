// 例1.4 包含类的C++程序


#include <iostream>
using namespace std;


class Student
{
private:
	int num;
	int score;
public:
	void setdata()
	{
		cin >> num;
		cin >> score;
		return;
	}
	void display()
	{
		cout << "num = " << num << endl;
		cout << "score = " << score << endl;
		return;
	}
};
Student stud1, stud2;


int main()
{
	stud1.setdata();
	stud2.setdata();
	stud1.display();
	stud2.display();
	return 0;
}