#include "Compare.h"

template <class numtype>
Compare <numtype>::Compare(numtype a, numtype b)
{
	x = a;
	y = b;
}

template <class numtype>
numtype Compare <numtype>::max()
{
	if (x > y)
	{
		return x;
	}
	else
	{
		return y;
	}
}