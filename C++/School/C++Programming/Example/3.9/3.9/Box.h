#pragma once


class Box
{
private:
	int height;
	int width;
	int length;
public:
	Box(int = 10, int = 10, int = 10);
	int volume();
};