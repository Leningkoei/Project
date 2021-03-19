#include "Graduate.h"
#include <iostream>

using namespace std;

Graduate::Graduate(string n_t, int a, string t, string n_s, char s, float sc, float w) :
	Teacher(n_t, a, t), Student(n_s, s, sc)
{
	wage = w;
}

void Graduate::display_graduate()
{
	cout << "name: " << name_teacher << endl;
	cout << "age: " << age << endl;
	cout << "sex: " << sex << endl;
	cout << "score: " << score << endl;
	cout << "title: " << title << endl;
	cout << "wages: " << wage << endl;
}