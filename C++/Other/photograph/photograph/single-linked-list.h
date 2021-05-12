#pragma once
#include "node.h"
class SinLinLis{
    friend class Graph;
private:
    Node* headNodeIp;
    Node* lastNodeIp;
    int length;
    SinLinLis(int* list, int listLength);
    void addNode(int value);
    void displayList();
    Node* findNodeIp(int value);
public:
    ~SinLinLis();
    SinLinLis();
};

