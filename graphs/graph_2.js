class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
      }
}

const myGraph = new Graph();

// agregamos los vertices
myGraph.addVertex('1');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addVertex('8');

// agregamos las conecciones
myGraph.addEdge('3','5');
myGraph.addEdge('6','3');
myGraph.addEdge('1','6');
myGraph.addEdge('1','3');
myGraph.addEdge('1','4');
myGraph.addEdge('4','5');
myGraph.addEdge('8','4');

/**
    // RESULTADO:adjacent List

    1: (3) ['6', '3', '4']
    3: (3) ['5', '6', '1']
    4: (3) ['1', '5', '8']
    5: (2) ['3', '4']
    6: (2) ['3', '1']
    8: ['4']
    
*/