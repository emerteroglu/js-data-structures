class Vertice {
  constructor(destination, distance) {
    this.destination = destination;
    this.distance = distance;
  }
}

class Node {
  constructor(name, vertices) {
    this.name = name;
    this.vertices = [];
    for (let i = 0; i < vertices.length; i++) {
      let _vertice = new Vertice(vertices[i].destination, vertices[i].distance);
      this.vertices.push(_vertice);
    }
  }
}

class Graph {
  constructor() {
    this.head = null;
    this.nodes = {};
  }

  add(name, edges) {
    let _edges = [];
    for (let i = 0; i < edges.length; i++) {
      _edges.push({destination: edges[i][0], distance: edges[i][1]});
    }
    let vertex = new Node(name, _edges);
    this.nodes[name] = vertex;
  }

  shortestPath(from, to) {
    let currentNode = this.nodes[from];
    let distances = {};
    let used = {};
    let path = [];
    used[from] = true;
    distances[from] = 0;
    while (true) {
      console.log(`Currently at ${currentNode.name}`);
      for (let i = 0; i < currentNode.vertices.length; i++) {
        if (!used[currentNode.vertices[i].destination]) {
          if (!distances[currentNode.vertices[i].destination]) {
            distances[currentNode.vertices[i].destination] = distances[currentNode.name] + currentNode.vertices[i].distance;
          } else if (distances[currentNode.name] + currentNode.vertices[i].distance < distances[currentNode.vertices[i].destination]) {
            distances[currentNode.vertices[i].destination] = distances[currentNode.name] + currentNode.vertices[i].distance;
          }
        }
      }
      let min = Infinity;
      let next = null;
      let keys = Object.keys(distances);
      for (let i = 0; i < keys.length; i++) {
        if (!used[keys[i]] && distances[keys[i]] < min) {
          min = distances[keys[i]];
          next = keys[i];
        }
      }
      if (!next) {
        break;
      }
      currentNode = this.nodes[next];
      used[next] = true;
      path.push(next);
    }
    console.log(distances);
    console.log(path);
  }
}

module.exports = Graph;
