#pragma once

class String
{
private:
	const char* p;

public:
	String();
	String(const char* str);
	friend bool operator>(String& string1, String& string2);
	friend bool operator<(String& string1, String& string2);
	friend bool operator==(String& string1, String& string2);
	void display();
};

