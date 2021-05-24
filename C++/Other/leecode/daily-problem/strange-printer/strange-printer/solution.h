#pragma once
#include <string>
using namespace std;
class Solution
{
    private:
    string data;
    int litterNum;
    public:
    ~Solution();
    Solution();
    Solution(string data, int litterNum);
    int getLitterIndex(char litter, int begin);
    int getLitterIndex(int begin, char litter);
    int getSolution();
};

