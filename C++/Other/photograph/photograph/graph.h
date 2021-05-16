#pragma once
#include "single-linked-list.h"
class Graph{
private:
    SinLinLis* data[10];
    int nodeNum;
    bool type;
    void addNewList(int* list, int listLength);
    void addNode(int ipValue, int value);
    SinLinLis* findNodeIp(int value);
public:
    ~Graph();
    Graph();
    //      true: 创建有向图, false: 创建无向图, 默认构造函数创建有向图;
    Graph(bool type);
    void addList(int* list, int listLength);
    void addList(void** list, int nodeNum);
    //      向图中的边中赋权;
    void addPowerList(int ip, int* list, int listLength);
    void displayGraph();
};

