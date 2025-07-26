// self invoking function
// (function foo() {
//   console.log("Hello world!");
// })();

function foo() {
  console.log("Hello world");
  console.log(a);
  if (document.getElementById("myElement").innerHTML) {
    var a = 10;
    document.getElementById("myElement").innerHTML = "Hello world from js";
  }
}

var productList = [];

function loadProducts() {
  productList = [
    {
      name: "Laptop",
      price: 55000,
      reviews: "A fast laptop with 16GB RAM and SSD",
    },
    {
      name: "Headphones",
      price: 2500,
      reviews: "Noise-cancelling over-ear headphones",
    },
    {
      name: "Smartphone",
      price: 30000,
      reviews: "5G-enabled smartphone with great camera",
    },
  ];
}

// template literal -> back ticks -> multiline string
function loadData() {
  document.getElementById("data").innerHTML = `
   <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Prices</th>
            <th>reviews</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Product 1</td>
            <td>Rs. 1000</td>
            <td>Good product</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>Rs. 5000</td>
            <td>Average product</td>
          </tr>
        </tbody>
      </table>
      `;
}

foo();

// returns positive integer
setTimeout(loadProducts, 2000);
setTimeout(loadData, 2000);
