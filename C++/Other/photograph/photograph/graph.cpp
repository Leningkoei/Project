#include "graph.h"
#include <iostream>
using namespace std;
Graph::~Graph(){
    cout << "正在删除this graph" << endl;
    //      TODO;
    cout << "删除this graph了哦" << endl;
}
Graph::Graph(){
    int i;
    for (i = 0; i < 10; i++){
        this->data[i] = NULL;
    }
    this->nodeNum = 0;
}
Node* Graph::findNodeIp(char value){
    int i;
    for (i = 0; i < this->nodeNum; i++){
        if (this->data[i]->value == value){
            return data[i];
        }
    }
    return NULL;
}
void Graph::addList(char list){
}
