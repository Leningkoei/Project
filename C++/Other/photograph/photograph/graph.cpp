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
SinLinLis* Graph::findNodeIp(int value){
    int i;
    for (i = 0; i < this->nodeNum; i++){
        if (this->data[i]->headNodeIp->value == value){
            return data[i];
        }
    }
    return NULL;
}
//      严格添加数组, 仅仅当被添加是数组确实为新的时候才能调用此函数;
void Graph::addNewList(int* list, int listLength){
    SinLinLis* sinLinLis;
    sinLinLis = new SinLinLis(list, listLength);
    this->data[this->nodeNum] = sinLinLis;
    this->nodeNum++;
}
//      (如果邻接表中没有值为ipValue的节点则会创建1个)在ipValue处追加value的单链表节点;
void Graph::addNode(int ipValue, int value){
    SinLinLis* p;
    //      寻找值等于传入的ipValue的节点在邻接表中的位置;
    p = this->findNodeIp(ipValue);
    //      如果在邻接表中没有值为ipValue的节点;
    if (p == NULL){
        //      以ipValue和value创建1个列表;
        int list[] = { ipValue, value };
        //      用该列表创建1个新的节点并添加进邻接表;
        this->addNewList(list, 2);
    }
    //      如果在邻接表中存在值为ipValue的节点, 此时p指向值为ipValue的节点的单链表;
    else{
        p->addNode(value);
    }
}
void Graph::addList(int* list, int listLength){
    int i;
    SinLinLis* p;
    //      在邻接表中寻找是否已经存在名为list[0]的节点了;
    p = this->findNodeIp(list[0]);
    //      如果邻接表中不存在名为list[0]的节点;
    if (p == NULL){
        //      用list创建1个新的节点并添加进邻接表;
        this->addNewList(list, listLength);
        //      遍历数组;
        for (i = 1; i < listLength && list[i] != -1; i++){
            this->addNode(list[i], list[0]);
        }
    }
    //      如果邻接表中已经存在了名为list[0]的节点, 此时p指向该节点的地址;
    else{
        //      遍历数组;
        for (i = 1; i < listLength && list[i] != -1; i++){
            //      如果p的单链表中不存在list[i];
            if (p->findNodeIp(list[i]) == NULL){
                p->addNode(list[i]);
                this->addNode(list[i], list[0]);
            }
            //      如果p的单链表中已经存在了list[i], 则什么也不做;
        }
    }
}
void Graph::addList(void** list, int nodeNum){
    int i;
    int j;
    int k;
    for (i = 0; i < nodeNum; i++){
        int listIn[20];
        for (k = 0; k < 20; k++){
            listIn[k] = -1;
        }
        listIn[0] = i;
        for (j = 0, k = 1; j < nodeNum; j++){
            if (*((int*)list + i * nodeNum + j) != 0){
                listIn[k] = j;
                k++;
            }
        }
        this->addList(listIn, nodeNum);
    }
}
void Graph::displayGraph(){
    int i;
    cout << "node num = " << this->nodeNum << endl;
    for (i = 0; i < this->nodeNum; i++){
        this->data[i]->displayList();
        cout << endl;
    }
}
