/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    //return a asynchronous function
    return function(...args) {
        // return a promise
        return new Promise((resolve, reject) => {
            //setup a timeout to reject the promise if fn does not complete within the specified time
            const timeout = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            //call the asynchronous function fn with thw provided arguments
            fn(...args)
            //if fn completes within time limit, resolve the promise with the result
              .then(result => {
              //clear the timeout to prevent the promise from being rejected due to timeout
                  clearTimeout(timeout);
                  resolve(result);
              })
              //if fn throws an error or rejects, reject the promise with the same error 
              .catch(error => {
            // clear the timeout to prevent the promise from being rejected due to timeout 
                  clearTimeout(timeout);
                  reject(error);
              });
        });
    };
};

/**
    if the function execution exceeds the time given it should return an error 'time limit exceeded'
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */