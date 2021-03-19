#include "Time.h"
#include <iostream>

using namespace std;

Time operator++(Time& time)
{
	if (++time.second >= 60)
	{
		time.second -= 60;
		++time.minute;

		return time;
	}
}

int main()
{
	Time time1(34, 0);
	for (int i = 0; i < 61; i++)
	{
		++time1;
		time1.display();
	}

	char q;
	cin >> q;

	return 0;
}