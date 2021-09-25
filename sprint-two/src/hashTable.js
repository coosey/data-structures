var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//Index
//Bucket
//Tuple
//Key and value

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];

  if (bucket === undefined) {
    bucket = [];
    this._storage[index] = bucket;
  }

  for (var i = 0; i < bucket.length; i++) {
    //Found the Key
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }

  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket at storage[index]
  //for loop thru bucket
  //if bucket[i][0] === k, then return bucket[i][1]
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket at storage[index]
  //for loop thru bucket
  //if bucket[i][0] === k, then delete tuple
  var bucket = this._storage[index];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].splice(i, 1);
      return;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


