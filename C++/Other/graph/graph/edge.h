#pragma once
class Edge
{
    friend class Graph;
    friend class Node;
    private:
    int firstName;
    int lastName;
    Edge* nextEdge;
    int power;
    void printEdge();
    public:
    ~Edge();
    Edge();
    Edge(int firstName, int lastName, int power);
};

