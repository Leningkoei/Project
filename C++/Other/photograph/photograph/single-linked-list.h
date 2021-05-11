#pragma once
#include "node.h"
class SingleLinkedList{
    friend class Graph;
private:
    Node* headNodeIp;
    Node* lastNodeIp;
public:
    ~SingleLinkedList();
    SingleLinkedList();
};

