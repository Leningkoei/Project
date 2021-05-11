#pragma once
class Node{
    friend class Graph;
private:
    Node* nextNodeIp;
    char value;
public:
    ~Node();
    Node();
};

