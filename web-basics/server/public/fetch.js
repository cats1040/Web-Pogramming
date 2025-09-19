// var x = fetch("http://localhost:5050/data");

// x.then((res) => {
//   console.log(res);
// });

// // 👇 Returns a promise
// var xmlHTTPRequest1 = new XMLHttpRequest();
// xmlHTTPRequest1.open("GET", url);
// xmlHTTPRequest1.send();

// xmlHTTPRequest1.onreadystatechange = function () {
//   if (xmlHTTPRequest1.readyState === 4) {
//     console.log("Response received from server is ", xmlHTTPRequest1.response);
//   }
// };

// // Implementing custom fetch using XMLHttpRequest
// // Accepts a URL
// // Returns a Promise
// // Promise should be resolvedwhen data is fetched from the server

// function customFtech(url) {
//   return new Promise(executorFunc);

//   function executorFunc(resolve, reject) {
//     var xmlHTTPRequest1 = new XMLHttpRequest();
//     xmlHTTPRequest1.open("GET", "http://localhost:5050/data");
//     xmlHTTPRequest1.send();

//     xmlHTTPRequest1.onreadystatechange = function () {
//       if (xmlHTTPRequest1.readyState === 4) {
//         console.log(
//           "Response received from server is ",
//           xmlHTTPRequest1.response
//         );
//         resolve(xmlHTTPRequest1.response);
//       }
//     };
//   }
// }

// var data = customFtech("https://localhost:5050/data");
// data.then((res) => {
//   console.log("Response from custom fetch is: ", res);
// });

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// xmlHttpRequest
// We want to se Promise use case
// The primary use of Promise is to handle aynchrous operations
// One of the most common asynchronous operations in web development is making network requests
// The network requests are basically made to fetch some data from the servers
// We well see how xmlHttpRequest constructor function id used to make network requests and fetch custom implementations

var xmlHTTPRequest1 = new XMLHttpRequest();
xmlHTTPRequest1.open("GET", "https://localhost:5050/data");
xmlHTTPRequest1.send();

xmlHTTPRequest1.onreadystatechange = function () {
  if (xmlHTTPRequest1.readyState == 4) {
    console.log("Response from server is: ", xmlHTTPRequest1.response);
  }
};

// Implement custom fetch using custom fetch
function customFetch(url) {
  return new Promise(executorFunc);

  function executorFunc(resolve, reject) {
    var xmlHTTPRequest = new XMLHttpRequest();
    xmlHTTPRequest.open("GET", url);
    xmlHTTPRequest.send();

    xmlHTTPRequest.onreadystatechange = function () {
      if (xmlHTTPRequest.readyState == 4) {
        if (xmlHTTPRequest.status >= 200 && xmlHTTPRequest.status < 300) {
          console.log("Response from server is: ", xmlHTTPRequest.response);
          resolve(xmlHTTPRequest.response);
        } else {
          reject("Request failed with status " + xmlHTTPRequest.status);
        }
      }
    };
  }
}
