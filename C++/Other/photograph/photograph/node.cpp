#include "node.h"
#include <iostream>
using namespace std;
//      public:
Node::~Node(){
    cout << "删除this node了哦";
}
Node::Node(){
    this->data = '#';
    this->nextNodeIp = NULL;
}
