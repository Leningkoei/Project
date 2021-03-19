#include "Graduate.h"
#include <iostream>

using namespace std;

Graduate::Graduate(string n, char s, int a, string t, float sc, float w) :
	Person(n, s, a), Teacher(n, s, a, t), Student(n, s, a, sc)
{
	wage = w;
}

void Graduate::display()
{
	cout << "name: " << name << endl;
	cout << "sex: " << sex << endl;
	cout << "age: " << age << endl;
	cout << "title: " << title << endl;
	cout << "score: " << score << endl;
	cout << "wage: " << wage << endl;
}