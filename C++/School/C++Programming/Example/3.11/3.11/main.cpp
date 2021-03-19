#include "Student.h"
#include <iostream>

using namespace std;

int main()
{
	Student stud[3] =
	{
		Student(1001, 18, 70),
		Student(1002, 19, 78),
		Student(1005, 20, 99)
	};

	int n;
	cout << "Please input the number of students: ";
	cin >> n;

	for (int i = 0; i < n; i++)
	{
		stud[i].total();
	}

	cout << "The average score of " << n << " students is " << Student::average() << endl;

	return 0;
}