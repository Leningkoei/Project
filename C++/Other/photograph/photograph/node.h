#pragma once
class Node{
    friend class Graph;
    friend class SinLinLis;
private:
    Node* nextNodeIp;
    int power;
    int value;
    Node(int value);
    void displayNode();
public:
    ~Node();
    Node();
};

