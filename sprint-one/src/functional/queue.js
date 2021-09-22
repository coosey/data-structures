var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add the value to queue
    //increment count
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return someInstance.size.length;
  };

  return someInstance;
};
