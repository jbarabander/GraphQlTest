var client = require('mongodb').MongoClient.connect('mongodb://localhost/graph-ql-test');
function Family () {
  this.collection = client.then(function (db) {
    return db.collection('family');
  });
}

Family.prototype.find = function () {
  this._arbitraryActionCreator('find');
}

Family.prototype._arbitraryActionCreator = function (actionName) {
  var self = this;
  return function () {
    var outerArgs = arguments;
    function then (resolve, reject) {
      return self.collection.then(function (collection) {
        return collection[actionName].apply(collection, outerArgs);
      })
      .then(resolve, reject);
    }

    function toArray () {
      return self.collection.then(function (collection) {
        return collection[actionName].apply(collection, outerArgs).toArray()
      })
    }

    return {
      then: then,
      toArray: toArray
    }
  }
}


var hi = new Family()
