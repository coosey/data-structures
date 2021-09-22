var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var newCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add the value to queue
    storage[count] = value;
    //increment count
    count++;
  };

  someInstance.dequeue = function() {
    //if current count is > newCount
    if (count > newCount) {
      var dequeue = storage[newCount];
      delete storage[newCount];
      newCount++;
      return dequeue;
    }
  };

  someInstance.size = function() {
    return Object.values(storage).length;
  };

  return someInstance;
};
