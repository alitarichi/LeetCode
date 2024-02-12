/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    //check to see if fn is empty and return x
	if (functions.length === 0) {
    return function(x) { return x; };
  }
    //if not empty reduceRight will calculate from right to left one by one
  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};