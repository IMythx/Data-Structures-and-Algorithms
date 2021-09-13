//Graphs
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1].includes(v2)) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (edge) => edge != vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (edge) => edge != vertex1
    );
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFS(start) {
    let result = [];
    let visited = {};
    let adjacencyList = this.adjacencyList;
    const Traverse = function (vertex) {
      if (!adjacencyList[vertex]) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          Traverse(v);
        }
      });
      return result;
    };
    return Traverse(start);
  }

  BFS(start) {
    let result = [];
    let q = [start];
    let visited = {};
    let removed;
    visited[start] = true;
    while (q.length) {
      if (!this.adjacencyList[start]) return null;
      removed = q.shift();
      result.push(removed);
      this.adjacencyList[removed].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          q.push(v);
        }
      });
    }
    return result;
  }
}
