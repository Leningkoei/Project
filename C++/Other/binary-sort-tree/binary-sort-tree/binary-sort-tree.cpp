#include "binary-sort-tree.h"
#include <iostream>
using namespace std;
XXSortI::~XXSortI(){
    //      cout << "deleting this XXI" << endl;
    this->deleteXXI(this->rootNode);
    //      cout << "deleted this XXI" << endl;
}
void XXSortI::deleteXXI(Node* p){
    if (p != NULL){
        this->deleteXXI(p->leftNode);
        this->deleteXXI(p->rightNode);
        delete p;
    }
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
    min = nodeNum / 2;
    node = new Node(this->data[min]);
    this->rootNode = node;
    node->leftNode = this->addNode(0, min);
    node->rightNode = this->addNode(min, this->nodeNum);
}
Node* XXSortI::addNode(int bgn, int end){
    Node* node;
    if (end - bgn == 1){
        if (bgn == 0){
            node = new Node(this->data[0]);
            return node;
        }
        node = NULL;
        return node;
    }
    int min;
    min = (bgn + end) / 2;
    node = new Node(this->data[min]);
    node->leftNode = this->addNode(bgn, min);
    node->rightNode = this->addNode(min, end);
    return node;
}
void XXSortI::printXXSortI(){
    this->printXXSortI(this->rootNode->leftNode);
    this->rootNode->printNode();
    this->printXXSortI(this->rootNode->rightNode);
}
void XXSortI::printXXSortI(Node* p){
    if (p != NULL){
        this->printXXSortI(p->leftNode);
        p->printNode();
        this->printXXSortI(p->rightNode);
    }
}
