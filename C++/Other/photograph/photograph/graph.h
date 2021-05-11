#pragma once
#include "single-linked-list.h"
class Graph{
private:
    Node* data[10];
    int nodeNum;
    Node* findNodeIp(char value);
public:
    ~Graph();
    Graph();
    void addList(char list);
};

