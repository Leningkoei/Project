#include "node.h"
#include <iostream>
using namespace std;
Node::~Node(){
    cout << "deleted this node" << endl;
}
Node::Node(){
    this->leftNode = NULL;
    this->name = -1;
    this->rightNode = NULL;
}
Node::Node(int name){
    this->leftNode = NULL;
    this->name = name;
    this->rightNode = NULL;
}
