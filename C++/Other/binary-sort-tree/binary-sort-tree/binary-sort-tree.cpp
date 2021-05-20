#include "binary-sort-tree.h"
#include <iostream>
using namespace std;
XXSortI::~XXSortI(){
    //      TODO;
}
XXSortI::XXSortI(){
    this->data = NULL;
    this->nodeNum = 0;
    this->rootNode = NULL;
}
XXSortI::XXSortI(int* sortedList, int nodeNum){
    int min;
    Node* node;
    this->data = sortedList;
    this->nodeNum = nodeNum;
    this->rootNode = NULL;
    min = nodeNum / 2;
    node = new Node(this->data[min]);
    this->rootNode = node;
    node->leftNode = this->addNode(min);
    node->rightNode = this->addNode(this->nodeNum + min);
}
Node* XXSortI::addNode(int nodeNum){
    if (nodeNum <= 0){
        return NULL;
    }
    int min;
    Node* node;
    min = nodeNum / 2;
    node = new Node(this->data[min]);
    node->leftNode = this->addNode(min);
    node->rightNode = this->addNode(this->nodeNum + min);
}
