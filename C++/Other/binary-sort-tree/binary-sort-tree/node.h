#pragma once
class Node
{
    friend class XXSortI;
    private:
    Node* leftNode;
    int name;
    Node* rightNode;
    public:
    ~Node();
    Node();
    Node(int name);
};

