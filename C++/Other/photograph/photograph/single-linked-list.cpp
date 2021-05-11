#include "single-linked-list.h"
#include <iostream>
using namespace std;
SingleLinkedList::~SingleLinkedList(){
    cout << "正在删除this single linked list" << endl;
    //      TODO;
    cout << "删除this single linked list了哦" << endl;
}
SingleLinkedList::SingleLinkedList(){
    this->headNodeIp = NULL;
    this->lastNodeIp = NULL;
}
