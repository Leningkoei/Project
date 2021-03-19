#pragma once

template <class numtype>
class Compare
{
private:
	numtype x;
	numtype y;

public:
	Compare(numtype a, numtype b);
	numtype max();
};

