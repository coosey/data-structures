var BinarySearchTree = function(value) {
  this.value = value;
  this.left;
  this.right;
};

BinarySearchTree.prototype.insert = function(value) {
  var newNode = new BinarySearchTree(value);
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value) {
  //check if current BST's value is value
  //if not then ask left to check if value is less than internal value
  //if not then ask right to check if value is greater than internal value

  if (value === this.value) {
    return true;
  }

  if (value < this.value) {
    return this.left ? this.left.contains(value) : false;
  }

  if (value > this.value) {
    return this.right ? this.right.contains(value) : false;
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);

  if (this.left) {
    this.left.depthFirstLog(callback);
  }

  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
  Complexity: What is the time complexity of the above functions?
  insert: O(n)
  contains: O(n)
  depthFirstLog: O(n)
 */