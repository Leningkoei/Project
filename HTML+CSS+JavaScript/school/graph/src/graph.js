var Graph = function(){
    //      边;
    var adjList = {};
    //      顶点;
    var vertices = [];
    //      添加点;
    this.addVertices = function(v){
        //      向存顶点的数组中添加1个顶点;
        vertices.push(v);
        //      创建存该顶点的边的数组;
        adjList[v] = [];
    }
    //      添加边
    this.addEdge = function(a, b){
        adjList[a].push(b);
        adjList[b].push(a);
    }
    //      输出邻接表;
    this.printGraph = function(){
        var edge;
        var node;
        var i;
        var j;
        document.write(
            "<table align=\"center\" border=\"1\"><tr><td>vertices</td></tr>");
        for (i = 0; i < vertices.length; i++){
            document.write("<tr>")
            node = vertices[i];
            document.write("<td align=\"center\">" + node + "</td>");
            edge = adjList[node];
            for (j = 0; j < edge.length; j++){
                document.write("<td>" + edge[j] + "</td>");
            }
            document.write("</tr>")
        }
        document.write("</table>")
    }
}
var frontMain = function(){
    var g;
    g = new Graph();
    g.addVertices('A');
    g.addVertices('B');
    g.addVertices('C');
    g.addVertices('D');
    g.addVertices('E');
    g.addVertices('F');
    g.addEdge('A', 'B');
    g.addEdge('A', 'C');
    g.addEdge('A', 'D');
    g.addEdge('C', 'D');
    g.addEdge('B', 'E');
    g.addEdge('F', 'B');
    g.printGraph();
}
window.onload = frontMain();
