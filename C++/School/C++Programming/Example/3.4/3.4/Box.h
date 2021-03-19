#pragma once


class Box
{
private:
	int height;
	int width;
	int length;
public:
	Box(int h = 10, int w = 10, int len = 10);
	int volume();
};

