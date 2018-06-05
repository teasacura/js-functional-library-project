fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      const newCollectionValues = fi.values(collection);
      for(const element of newCollectionValues) {
        iteratee(element);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      const newCollectionValues = fi.values(collection);
      const resultArray = [];
      for(const element of newCollectionValues) {
        resultArray.push(iteratee(element));
      }
      return resultArray;
    },

    reduce: function(collection, iteratee, acc = 0) {
      const newCollectionValues = fi.values(collection);
      for(const element of newCollectionValues) {
        acc = iteratee(acc, element, collection);

      }
      return acc;
    },

    find: function(collection, predicate) {
      const newCollectionValues = fi.values(collection);
      let result;
      for(const element of newCollectionValues) {
        if (predicate(element)) {
          result = element;
          break;
        }
      }
      return result;
    },

    filter: function(collection, predicate) {
      const newCollectionValues = fi.values(collection);
      let result = [];
      for(const element of newCollectionValues) {
        if (predicate(element)) {
          result.push(element);
        }
      }
      return result;
    },

    size: function(collection) {
      let counter = 0;
      const newCollectionValues = fi.values(collection);
      for(const element of newCollectionValues) {
        counter++;
      }
      return counter;
    },

    first: function(array, n) {
      let result = [];
      if (n === undefined) {
        result = array[0];
      } else {
        for(let i=0; i < n; i++) {
          result.push(array[i]);
        }
      }
      return result;
    },

    last: function(array, n) {
      let result = [];
      if (n === undefined) {
        result = array[array.length-1];
      } else {
        for(let i=array.length-1; i >= array.length-n; i--) {
          result.unshift(array[i]);
        }
      }
      return result;
    },

    compact: function(array) {
      let result = [];
      for(const element of array) {
        if (element) {
          result.push(element);
        }
      }
      return result;
    },

    sortBy: function(array, iteratee) {
      let result = array;
      for(const element of result) {
        console.log(element);
        result.sort(iteratee(element));
      }
      console.log(result);
      return result;
    },

    values: function(object) {
      const resultArray = [];
      for(const key in object) {
        resultArray.push(object[key]);
      }
      return resultArray;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
