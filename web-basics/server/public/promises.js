function promiseExecutor() {
  setTimeout(() => {
    console.log("Promise 1 executed");
  }, 5000);
}

var promise = new Promise(promiseExecutor);

function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log("Promise 1 executed");
    resolve("Promise 1 resolved");
  }, 5000);
}

var promise = new Promise(promiseExecutor);
promise
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(es);
  });

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function PromiseCustom(executor) {
  this.state = "pending";
  executor();
}

function customPromiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log("Promise 1 executed");
    resolve("Promise 1 resolved");
  }, 5000);
}

function PromiseCustom(executor) {
  this.state = "pending";
  let successCallback;
  let failureCallback;

  this.then = function (callback) {
    successCallback = callback;
  };
  this.catch = function (callback) {
    failureCallback = callback;
  };

  executor(
    (responseArg) => {
      this.state = "fullfilled";
      successCallback(responseArg);
    },
    (errorArg) => {
      this.state = "rejected";
      failureCallback(errorArg);
    }
  );
}
var customPromise1 = new PromiseCustom(promiseExecutor);

customPromise1.then((val) => {
  alert("Promise resolved with value: " + val);
});
