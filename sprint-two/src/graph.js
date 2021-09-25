

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.nodes[node]) {
    this.nodes[node] = true;
    this.edges[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Boolean(this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];

  //Needs to delete any edges that this node contained
  delete this.edges[node];

  //needs to search all
  for (var key in this.edges) {
    //smaller nodes
    if (Number(key) < node) {
      //if smaller node contains connection
      var index = this.edges[key].indexOf(node);
      if (index >= 0) {
        //remove any connections to deleted node
        this.edges[key].splice(index, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(nodeA, nodeB) {

  var indexNode, compareNode;
  if (nodeA < nodeB) {
    indexNode = nodeA;
    compareNode = nodeB;
  } else {
    indexNode = nodeB;
    compareNode = nodeA;
  }

  if (this.nodes[indexNode]) {
    return this.edges[indexNode].includes(compareNode);
  }

  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(nodeA, nodeB) {
  //create array
  //at index 0 set to smallest node
  //at index 1 set to largest node

  //sort larger and smaller node
  var smallerNode, largerNode;
  if (nodeA < nodeB) {
    smallerNode = nodeA;
    largerNode = nodeB;
  } else {
    smallerNode = nodeB;
    largerNode = nodeA;
  }

  //if node exists then add 'connection' to larger node
  if (this.nodes[smallerNode]) {
    this.edges[smallerNode].push(largerNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(nodeA, nodeB) {

  //sort larger and smaller node
  var smallerNode, largerNode;
  if (nodeA < nodeB) {
    smallerNode = nodeA;
    largerNode = nodeB;
  } else {
    smallerNode = nodeB;
    largerNode = nodeA;
  }

  if (this.edges[smallerNode]) {
    var index = this.edges[smallerNode].indexOf(largerNode);

    if (index >= 0) {
      //remove any connections to deleted node
      this.edges[smallerNode].splice(index, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(Number(key));
  }
};

/*
 Complexity: What is the time complexity of the above functions?
 addNode: O(1)
 Contains: O(1)
 removeNode:
 addEdge
 hasEdge
 removeEdge
 forEachNode: O(n)
 */


