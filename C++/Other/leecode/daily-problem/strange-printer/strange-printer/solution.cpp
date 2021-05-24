#include "solution.h"
#include <iostream>
using namespace std;
Solution::~Solution(){
    cout << "deleted this solution" << endl;
}
Solution::Solution(){
    this->data = "NULL";
    this->litterNum = 0;
}
Solution::Solution(string data, int litterNum){
    this->data = data;
    this->litterNum = litterNum;
}
int Solution::getLitterIndex(char litter, int begin){
    int index;
    index = 0;
    return index;
}
int Solution::getLitterIndex(int begin, char litter){
    int index;
    index = 0;
    return index;
}
int Solution::getSolution(){
    int result;
    result = 0;
    return result;
}
