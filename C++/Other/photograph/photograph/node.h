#pragma once
class Node{
    friend class Graph;
    friend class SinLinLis;
private:
    Node* nextNodeIp;
    int value;
    int power;
    Node(int value);
    void displayNode();
public:
    ~Node();
    Node();
};

