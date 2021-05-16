#include "node.h"
#include <iostream>
using namespace std;
Node::~Node(){
    cout << "删除this node了哦" << endl;
}
Node::Node(){
    this->nextNodeIp = NULL;
    this->power = 0;
    this->value = -1;
}
Node::Node(int value){
    this->nextNodeIp = NULL;
    this->power = 0;
    this->value = value;
}
void Node::displayNode(){
    cout << this->value << "(" << this->power << ")";
}
