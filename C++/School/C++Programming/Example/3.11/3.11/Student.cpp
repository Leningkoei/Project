#include "Student.h"

void Student::total()
{
	sum += score;
	count++;
	
	return;
}

float Student::average()
{
	float average;
	average = sum / count;

	return average;
}

float Student::sum = 0;

int Student::count = 0;