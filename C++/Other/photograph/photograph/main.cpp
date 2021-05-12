#include "graph.h"
#include <iostream>
using namespace std;
int main(){
    Graph* graph;
    graph = new Graph();
    int listA[] = { 0, 1, 2, 3, 4 };
    int listB[] = { 1, 0, 2, 3, 4, 5 };
    graph->addList(listA, 5);
    graph->addList(listB, 6);
    graph->displayGraph();
    int list[5][5] = {
        { 0, 1, 1, 1, 1 },
        { 1, 0, 0, 0, 0 },
        { 1, 0, 0, 0, 0 },
        { 1, 0, 0, 0, 0 },
        { 1, 0, 0, 0, 0 }};
    graph = new Graph();
    graph->addList((void**)list, 5);
    graph->displayGraph();
    return 0;
}
