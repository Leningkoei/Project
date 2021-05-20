#pragma once
#include "node.h"
class XXSortI
{
    private:
    int* data;
    int nodeNum;
    Node* rootNode;
    Node* addNode(int nodeNum);
    public:
    ~XXSortI();
    XXSortI();
    XXSortI(int* sortedList, int nodeNum);
};

