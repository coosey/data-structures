var HashTable = function() {
  this._limit = 8;
  this.count = 0;
  this._storage = LimitedArray(this._limit);
};

//Index
//Bucket
//Tuple
//Key and value

HashTable.prototype.insert = function(k, v, resize = true) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    //Found the Key
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }

  bucket.push([k, v]);
  this.count++;
  if (resize) {
    this.checkResize();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket at storage[index]
  //for loop thru bucket
  //if bucket[i][0] === k, then return bucket[i][1]
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k, resize = true) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //get bucket at storage[index]
  //for loop thru bucket
  //if bucket[i][0] === k, then delete tuple
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this.count--;
      if (resize) {
        this.checkResize();
      }
      return;
    }
  }
};

HashTable.prototype.checkResize = function() {
  var ratio = this.count / this._limit;
  //if we need to resize
  if (ratio && (ratio < 0.25 || ratio > 0.75)) {
    var result;
    //if we need to grow
    if (ratio > 0.75) {
      result = new HashTable();
      result._limit = this._limit * 2;
      result._storage = LimitedArray(result._limit);
    //if we need to shrink
    } else {
      result = new HashTable();
      result._limit = this._limit / 2;
      result._storage = LimitedArray(result._limit);
    }

    this._storage.each(function (bucket) {
      if (bucket) {
        for (var i = 0; i < bucket.length; i++) {
          var key = bucket[i][0];
          var value = bucket[i][1];
          result.insert(key, value, false);
        }
      }
    });

    //Assign internal properties to new properties, count stays the same;
    this._storage = result._storage;
    this._limit = result._limit;
  }
};

/*HashTable.prototype.forEach = function(func) {
  for (var i = 0; i < this._storage.length; i++) {
    for (var j = 0; j < this._storage[i].length; j++) {
      var key = this._storage[i][j][0];
      var value = this._storage[i][j][1];
      func(key, value);
    }
  }
};*/



/*
  Complexity: What is the time complexity of the above functions?
  insert: O(n)
  retrieve: O(n)
  remove: O(n)
 */


