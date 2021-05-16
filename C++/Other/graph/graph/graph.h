#pragma once
#include "node.h"
class Graph
{
    private:
    int nodeNum;
    Node* nodes[20];
    int travelNodes[20];
    int travelNodeNum;
    bool type;
    void addNode();
    void clearTravelLog();
    Node* findNode(int name);
    bool findTravelNode(int name);
    void travelGraph(Edge* p);
    struct _Node{
        int name;
        int value;
    };
    public:
    ~Graph();
    Graph();
    Graph(bool type);
    Graph(void** list, int nodeNum);
    void addEdge(int nodeName, int edgeName);
    void addEdge(int nodeName, int edgeName, int power);
    void addNode(int nodeNum);
    void kruskal();
    void prim(int name);
    void printGraph();
    void printSqr();
    void printSqr(bool type);
    void travelGraph(int name);
};

