const Graph = require("./graph.js");

let graph = new Graph();

graph.add("0", [
  [1, 2],
  [2, 6],
]);
graph.add("1", [
  [3, 5],
  [0, 2],
]);
graph.add("2", [
  [3, 8],
  [0, 6],
]);
graph.add("3", [
  [5, 15],
  [4, 10],
  [1, 5],
  [2, 8],
]);
graph.add("4", [
  [3, 10],
  [5, 6],
  [6, 2],
]);
graph.add("5", [
  [3, 15],
  [4, 6],
  [6, 6],
]);
graph.add("6", [
  [4, 2],
  [5, 6],
]);

console.log(graph);
graph.shortestPath("0");
