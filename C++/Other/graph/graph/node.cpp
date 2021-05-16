#include "node.h"
#include <iostream>
using namespace std;
Node::~Node(){
    //      cout << "deleting this node..." << endl;
    Edge* p;
    Edge* q;
    for (p = this->headEdge; p != NULL;){
        q = p->nextEdge;
        delete p;
        p = q;
    }
    //      cout << "deleted this node" << endl;
}
Node::Node(){
    Edge* edge;
    edge = new Edge();
    this->headEdge = edge;
    this->lastEdge = edge;
    this->edgeNum = 0;
    this->name = -1;
}
Node::Node(int name){
    Edge* edge;
    edge = new Edge();
    this->headEdge = edge;
    this->lastEdge = edge;
    this->edgeNum = 0;
    this->name = name;
}
void Node::addEdge(int lastName, int power){
    Edge* edge;
    edge = new Edge(this->name, lastName, power);
    this->lastEdge->nextEdge = edge;
    this->lastEdge = edge;
    this->edgeNum++;
}
Edge* Node::findEdge(int name){
    Edge* p;
    for (p = this->headEdge->nextEdge; p != NULL; p = p->nextEdge){
        if (p->lastName == name){
            return p;
        }
    }
    return NULL;
}
void Node::printNode(){
    Edge* p;
    cout << this->name << ": ";
    for (p = this->headEdge->nextEdge; p != NULL; p = p->nextEdge){
        p->printEdge();
    }
    cout << endl;
}
