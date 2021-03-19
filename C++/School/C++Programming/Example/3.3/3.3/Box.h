#pragma once


class Box
{
private:
	int height;
	int width;
	int length;
public:
	Box();
	Box(int h, int w, int len) :height(h), width(w), length(len){}
	int volume();
};