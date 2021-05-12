#include "node.h"
#include <iostream>
using namespace std;
Node::~Node(){
    cout << "删除this node了哦";
}
Node::Node(){
    this->nextNodeIp = NULL;
    this->value = -1;
    this->power = 0;
}
Node::Node(int value){
    this->nextNodeIp = NULL;
    this->value = value;
}
void Node::displayNode(){
    cout << this->value;
}
