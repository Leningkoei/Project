#include "node.h"
#include <iostream>
using namespace std;
Node::~Node(){
    //      cout << "deleted this node" << endl;
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
void Node::printNode(){
    cout << this->name;
    if (this->leftNode != NULL && this->rightNode != NULL){
        cout << "(" << this->leftNode->name << ", " << this->rightNode->name << ")";
    }
    else{
        if (this->leftNode != NULL){
            cout << "(" << this->leftNode->name << ")";
        }
        if (this->rightNode != NULL){
            cout << "(, " << this->rightNode->name << ")";
        }
    }
    cout << endl;
}
