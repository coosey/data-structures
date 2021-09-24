var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if (list.head !== null) {
      var result = list.head.value;
      list.head = list.head.next;

      if (list.head === null) {
        list.tail = null;
      }

      return result;
    }
  };

  // 1, 2, 3, 4
  //cheacking if it has 3
  list.contains = function(target) {
    var viewNode = list.head;
    //Need to access all nodes
    //probably a while loop
    do {
      //if Node value === 3, return true
      if (viewNode.value === target) {
        return true;
      }
      viewNode = viewNode.next;
    } while (viewNode !== null);
    //if reached end of list return false
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addToTail = O(1)
  removeHead = O(1)
  Contains = O(n)
 */
