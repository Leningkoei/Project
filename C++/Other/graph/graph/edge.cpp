#include "edge.h"
#include <iostream>
using namespace std;
Edge::~Edge(){
    //      cout << "deleted this edge" << endl;
}
Edge::Edge(){
    this->firstName = -1;
    this->lastName = -1;
    this->nextEdge = NULL;
    this->power = 9999;
}
Edge::Edge(int firstName, int lastName, int power){
    this->firstName = firstName;
    this->lastName = lastName;
    this->nextEdge = NULL;
    this->power = power;
}
void Edge::printEdge(){
    cout << '(' << this->firstName << " >(" << this->power << ")> " << this->lastName << ')';
}
