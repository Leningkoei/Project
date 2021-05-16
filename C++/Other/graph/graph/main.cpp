#include "graph.h"
#include <iostream>
constexpr auto INF = 9999;
using namespace std;
int main(){
    Graph* graph;
    int list[6][6] = {
        { 0, 5, INF, 7, INF, INF },
        { INF, 0, 4, INF, INF, INF },
        { 8, INF, 0, INF, INF, 9 },
        { INF, INF, 5, 0, INF, 6 },
        { INF, INF, INF, 5, 0, INF },
        { 3, INF, INF, INF, 1, 0 },
    };
    //      1{
    //      (1){
    graph = new Graph((void**)list, 6);
    graph->printSqr();
    //      2{
    graph->travelGraph(0);
    graph->travelGraph(5);
    //      }
    //      }
    delete graph;
    //      (2){
    graph = new Graph(false);
    graph->addNode(6);
    graph->addEdge(0, 1, 5);
    graph->addEdge(0, 3, 7);
    graph->addEdge(1, 2, 4);
    graph->addEdge(2, 0, 8);
    graph->addEdge(2, 5, 9);
    graph->addEdge(3, 2, 5);
    graph->addEdge(3, 5, 6);
    graph->addEdge(4, 3, 5);
    graph->addEdge(5, 0, 3);
    graph->addEdge(5, 4, 1);
    //      }
    graph->printGraph();
    //      (3);
    delete graph;
    //      }
    //      5, 6{
    graph = new Graph(false);
    graph->addNode(6);
    graph->addEdge(0, 1, 5);
    graph->addEdge(0, 2, 8);
    graph->addEdge(0, 3, 7);
    graph->addEdge(0, 5, 3);
    graph->addEdge(1, 2, 4);
    graph->addEdge(2, 3, 5);
    graph->addEdge(2, 5, 9);
    graph->addEdge(3, 4, 5);
    graph->addEdge(3, 5, 6);
    graph->addEdge(4, 5, 1);
    //      5;
    graph->prim(4);
    //      6;
    graph->kruskal();
    //      }
    delete graph;
    return 0;
}