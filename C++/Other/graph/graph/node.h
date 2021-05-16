#pragma once
#include "edge.h"
class Node
{
    friend class Graph;
    private:
    Edge* headEdge;
    Edge* lastEdge;
    int edgeNum;
    int name;
    Edge* findEdge(int name);
    void printNode();
    public:
    ~Node();
    Node();
    Node(int name);
    void addEdge(int lastName, int power);
};

