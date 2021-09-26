var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //Make 'new' var that is a Tree with value
  var newTree = Tree(value);

  //this.children.push(new tree var)
  this.children.push(newTree);
};
//(undefined) -> (2) -> (5), (3), (4)
treeMethods.contains = function(target) {
  //Return bool (true/false)
  //if sreached target is value return true
  //else if tree contains children
  //check all of children and return their finding
  //if at any point a child returns true stop looking

  if (this.value === target) {
    return true;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild = O(1)
  contains = O(n)
 */

