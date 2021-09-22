var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add the value to queue
    storage[count] = value;
    //increment count
    count++;
  };

  someInstance.dequeue = function() {
    //if current count is > 0
    if (count > 0) {
      //decrement count
      count--;
    }
    //create a variable & set it to storage[0]
    var current = storage[0];
    //remove first value in storage
    delete storage[0];
    //
  };

  someInstance.size = function() {
    return someInstance.size.length;
  };

  return someInstance;
};
