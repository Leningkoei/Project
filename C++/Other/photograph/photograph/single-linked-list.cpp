#include "single-linked-list.h"
#include <iostream>
using namespace std;
SinLinLis::~SinLinLis(){
    cout << "正在删除this single linked list" << endl;
    //      TODO;
    cout << "删除this single linked list了哦" << endl;
}
SinLinLis::SinLinLis(){
    this->headNodeIp = NULL;
    this->lastNodeIp = NULL;
    this->length = 0;
    this->name = -1;
}
SinLinLis::SinLinLis(int* list, int listLength){
    int i;
    Node* node;
    node = new Node(list[0]);
    this->length++;
    this->name = list[0];
    this->headNodeIp = node;
    this->lastNodeIp = node;
    for (i = 1; i < listLength; i++){
        this->addNode(list[i]);
    }
}
void SinLinLis::addNode(int value){
    Node* node;
    node = new Node(value);
    this->lastNodeIp->nextNodeIp = node;
    this->lastNodeIp = node;
    this->length++;
}
void SinLinLis::displayList(){
    Node* p;
    p = this->headNodeIp;
    //      p->displayNode();
    cout << this->name << ": ";
    for (p = p->nextNodeIp; p != NULL; p = p->nextNodeIp){
        p->displayNode();
        if (p->nextNodeIp != NULL){
            cout << ", ";
        }
    }
}
Node* SinLinLis::findNodeIp(int value){
    Node* p;
    for (p = this->headNodeIp; p != NULL; p = p->nextNodeIp){
        if (p->value == value){
            return p;
        }
    }
    return NULL;
}
