#pragma once
#include "single-linked-list.h"
class Graph{
private:
    SinLinLis* data[10];
    int nodeNum;
    void addNewList(int* list, int listLength);
    void addNode(int headValue, int newValue);
    SinLinLis* findNodeIp(int value);
public:
    ~Graph();
    Graph();
    void addList(int* list, int listLength);
    void addList(void** list, int nodeNum);
    void displayGraph();
};

