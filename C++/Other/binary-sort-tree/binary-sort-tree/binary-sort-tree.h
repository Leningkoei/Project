#pragma once
#include "node.h"
class XXSortI
{
    private:
    int* data;
    int nodeNum;
    Node* rootNode;
    Node* addNode(int bgn, int end);
    void deleteXXI(Node* p);
    void printXXSortI(Node* p);
    public:
    ~XXSortI();
    XXSortI();
    XXSortI(int* sortedList, int nodeNum);
    void printXXSortI();
};

