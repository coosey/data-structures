var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

//Index
//Bucket
//Tuple
//Key and value

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  for (var i = 0; i < bucket.length; i++) {
    //Found the Key
    var turple = bucket[i];
    if (turple[0] === k) {
      turple[1] = v;
      return;
    }
  }

  bucket.push([k, v]);
  this._count++;
  if (this._count > this._limit * 0.75) {
    this._resize( this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  for (var i = 0; i < bucket.length; i++) {
    var turple = bucket[i];
    if (turple[0] === k) {
      return turple[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if (!bucket) {
    return;
  }

  for (var i = 0; i < bucket.length; i++) {
    var turple = bucket[i];
    if (turple[0] === k) {
      bucket.splice(i, 1);
      this._count--;
      if (this._count < this._limit * 0.25) {
        this._resize( this._limit / 2);
      }
      return turple[1];
    }
  }
};

HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._storage = LimitedArray(newLimit);
  this._count = 0;

  var context = this;

  oldStorage.each(function (bucket) {
    if (!bucket) {
      return;
    }

    for (var i = 0; i < bucket.length; i++) {
      var turple = bucket[i];
      var key = turple[0];
      var value = turple[1];
      context.insert(turple[0], turple[1]);
    }
  });
};

/*
  Complexity: What is the time complexity of the above functions?
  insert: O(n)
  retrieve: O(n)
  remove: O(n)
 */


