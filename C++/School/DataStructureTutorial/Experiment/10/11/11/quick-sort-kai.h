#pragma once
#include <string>
using namespace std;
class QuickSortKai
{
    private:
    string* data;
    int dataLength;
    void printData();
    public:
    ~QuickSortKai();
    QuickSortKai();
    QuickSortKai(string* data, int dataLength);
    void doQuickSortKai(int bgn, int end);
};

