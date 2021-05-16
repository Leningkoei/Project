#include "graph.h"
#include <iostream>
using namespace std;
Graph::~Graph(){
    //      cout << "deleting this graph" << endl;
    int i;
    for (i = 0; i < this->nodeNum; i++){
        delete this->nodes[i];
    }
    //      cout << "deleted this graph" << endl;
}
Graph::Graph(){
    int i;
    this->nodeNum = 0;
    for (i = 0; i < 20; i++){
        this->nodes[i] = NULL;
    }
    for (i = 0; i < 20; i++){
        this->travelNodes[i] = -1;
    }
    this->travelNodeNum = 0;
    this->type = true;
}
Graph::Graph(bool type){
    int i;
    this->nodeNum = 0;
    for (i = 0; i < 20; i++){
        this->nodes[i] = NULL;
    }
    for (i = 0; i < 20; i++){
        this->travelNodes[i] = -1;
    }
    this->travelNodeNum = 0;
    this->type = type;
}
Graph::Graph(void** list, int nodeNum){
    Node* node;
    int power;
    int i;
    int j;
    this->nodeNum = 0;
    for (i = 0; i < 20; i++){
        this->nodes[i] = NULL;
    }
    for (i = 0; i< 20; i++){
        this->travelNodes[i] = -1;
    }
    this->travelNodeNum = 0;
    this->type = true;
    for (i = 0; i < nodeNum; i++){
        node = new Node();
        node->name = i;
        this->nodes[this->nodeNum++] = node;
        for (j = 0; j < nodeNum; j++){
            power = *((int*)list + i * nodeNum + j);
            if (power != 0 && power != 9999){
                node->addEdge(j, power);
            }
        }
    }
}
void Graph::addEdge(int nodeName, int edgeName){
    this->addEdge(nodeName, edgeName, 1);
}
void Graph::addEdge(int nodeName, int edgeName, int power){
    Node* p;
    p = this->findNode(nodeName);
    if (p->findEdge(edgeName) != NULL){
        cout << "warning: " << edgeName << " already in " << nodeName;
    }
    else{
        if (this->type == true){
            if (p != NULL){
                p->addEdge(edgeName, power);
            }
            else{
                cout << "find " << nodeName << " false" << endl;
            }
        }
        else{
            Node* q;
            q = this->findNode(edgeName);
            //      if (q->findEdge(nodeName) != NULL){
                //      cout << nodeName << " already in " << edgeName << endl;
            //      }
            //      else{
            if (p != NULL && q != NULL){
                p->addEdge(edgeName, power);
                q->addEdge(nodeName, power);
            }
            else if (p == NULL && q == NULL){
                cout << "find " << nodeName << " and " << edgeName << " false"
                    << endl;
            }
            else if (p == NULL){
                cout << "find " << nodeName << " false" << endl;
            }
            else{
                cout << "find " << edgeName << " false" << endl;
            }
            //      }
        }
    }
}
void Graph::addNode(){
    Node* node;
    node = new Node(this->nodeNum);
    this->nodes[this->nodeNum++] = node;
}
void Graph::addNode(int nodeNum){
    int i;
    for (i = 0; i < nodeNum; i++){
        this->addNode();
    }
}
void Graph::clearTravelLog(){
    int i;
    for (i = 0; i < this->travelNodeNum; i++){
        this->travelNodes[i] = -1;
    }
    this->travelNodeNum = 0;
}
Node* Graph::findNode(int name){
    Node* node;
    int i;
    for (i = 0; i < this->nodeNum; i++){
        node = this->nodes[i];
        if (node->name == name){
            return node;
        }
    }
    return NULL;
}
bool Graph::findTravelNode(int name){
    int i;
    for (i = 0; i < this->travelNodeNum; i++){
        if (name == this->travelNodes[i]){
            return true;
        }
    }
    return false;
}
void Graph::kruskal(){
    struct _Node* firstNameNode;
    struct _Node* lastNameNode;
    int powerListLength;
    int i;
    int j;
    int k;
    Edge* p;
    struct _Node* q;
    //      按边的权从小到大排序{
    Edge* powerList[380];
    for (i = 0; i < 380; i++){
        powerList[i] = NULL;
    }
    powerListLength = 0;
    for (i = 0; i < this->nodeNum; i++){
        for (p = this->nodes[i]->headEdge->nextEdge; p != NULL; p = p->nextEdge){
            powerList[powerListLength++] = p;
        }
    }
    for (i = 0; i < powerListLength - 1; i++){
        for (j = 0; j < powerListLength - 1; j++){
            if (powerList[j]->power > powerList[j + 1]->power){
                p = powerList[j];
                powerList[j] = powerList[j + 1];
                powerList[j + 1] = p;
            }
        }
    }
    //      }
    struct _Node* nodes[20];
    for (i = 0; i < 20; i++){
        nodes[i] = NULL;
    }
    for (i = 0; i < this->nodeNum; i++){
        q = new struct _Node();
        q->name = this->nodes[i]->name;
        q->value = q->name;
        nodes[i] = q;
    }
    for (i = 0; i < powerListLength; i++){
        //      遍历nodes
        for (k = 0, firstNameNode = NULL; k < this->nodeNum; k++){
            //      如果找到第i短的边的起始点与nodes中的某1点的名字相等
            if (powerList[i]->firstName == nodes[k]->name){
                firstNameNode = nodes[k];
            }
        }
        for (k = 0, lastNameNode = NULL; k < this->nodeNum; k++){
            if (powerList[i]->lastName == nodes[k]->name){
                lastNameNode = nodes[k];
            }
        }
        if (firstNameNode == NULL || lastNameNode == NULL){
            cout << "NMSL" << endl;
            break;
        }
        if (firstNameNode->value != lastNameNode->value){
            cout << powerList[i]->firstName << '(' << firstNameNode->value << ')' << " >(" << powerList[i]->power << ")> " << powerList[i]->lastName << '(' << lastNameNode->value << ')' << endl;
            //      遍历nodes;
            k = lastNameNode->value;
            for (j = 0; j < this->nodeNum; j++){
                //      如果在nodes中找到(实际上)名为该边的终止点的点们;
                if (nodes[j]->value == k){
                    //      合并2点;
                    nodes[j]->value = firstNameNode->value;
                }
            }
        }
    }
    for (i = 0; i < this->nodeNum; i++){
        cout << nodes[i]->name << '(' << nodes[i]->value << ')' << endl;
    }
}
void Graph::prim(int name){
    if (this->type == true){
        cout << "warning: this graph might be digraph";
    }
    if (this->findTravelNode(name) == false){
        Edge* minEdge;
        Node* minNode;
        int minPower;
        int i;
        Node* p;
        Edge* q;
        this->travelNodes[this->travelNodeNum++] = name;
        //      在this->travelNodes中寻找有最小权的边;
        for (i = 0, minEdge = NULL, minNode = NULL, minPower = 9999; i < this->travelNodeNum; i++){
            p = this->findNode(this->travelNodes[i]);
            //      在node中寻找有最小权的边;
            for (q = p->headEdge->nextEdge; q != NULL; q = q->nextEdge){
                //      当q->name不在this->travelNode中且q->power是当前最小权时;
                if (this->findTravelNode(q->lastName) == false && q->power <= minPower){
                    minNode = p;
                    minEdge = q;
                    minPower = q->power;
                }
            }
        }
        //      此时minEdge拥有this->travelNodes中的最小边;
        if (minEdge != NULL){
            cout << minNode->name << " >(" << minPower << ")> " << minEdge->lastName << endl;
            this->prim(minEdge->lastName);
        }
        else{
            cout << "end" << endl;
            this->clearTravelLog();
        }
    }
}
void Graph::printGraph(){
    int i;
    for (i = 0; i < this->nodeNum; i++){
        this->nodes[i]->printNode();
    }
}
void Graph::printSqr(){
    this->printSqr(true);
}
void Graph::printSqr(bool type){
    int i;
    int j;
    Node* p;
    Edge* q;
    for (i = 0; i < this->nodeNum; i++){
        p = this->nodes[i];
        for (j = 0, q = p->headEdge->nextEdge; j < this->nodeNum; j++){
            if (i == j){
                cout << "\t" << 0;
            }
            else{
                q = p->findEdge(j);
                if (q == NULL){
                    cout << "\t";
                    if (type == true){
                        cout << "INF";
                    }
                    else{
                        cout << "0";
                    }
                }
                else{
                    cout << "\t" << q->power;
                }
            }
        }
        cout << endl;
    }
}
void Graph::travelGraph(int name){
    Node* p;
    p = this->findNode(name);
    if (p == NULL){
        cout << name << " is not in this graph" << endl;
    }
    else{
        Edge* q;
        //      先序递归的操作在这添加{
        cout << name;
        //      }
        this->travelNodes[this->travelNodeNum++] = name;
        for (q = p->headEdge->nextEdge; q != NULL; q = q->nextEdge){
            this->travelGraph(q);
        }
        cout << endl;
        this->clearTravelLog();
    }
}
void Graph::travelGraph(Edge* p){
    Node* q;
    Edge* r;
    if (this->findTravelNode(p->lastName) == false){
        //      先序递归的操作在这添加{
        cout << "==>" << p->lastName;
        //      }
        this->travelNodes[this->travelNodeNum++] = p->lastName;
        q = this->findNode(p->lastName);
        for (r = q->headEdge->nextEdge; r != NULL; r = r->nextEdge){
            this->travelGraph(r);
        }
    }
}
