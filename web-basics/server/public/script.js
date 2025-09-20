import { sum } from "./math.js";

var productList = [];

function loadProducts(foo) {
  setTimeout(() => {
    productList = productListFromServer;
    foo();
  }, 2000);
}

// template literal -> back ticks -> multiline string
function renderData() {
  // fetch the data from sever
  // convert the data into html and render it on UI

  function renderProductListTableWithData() {
    // debugger;
    if (productList.length === 0) {
      document.getElementById("data").innerHTML = `
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Product Name</th>
            <th>Prices</th>
            <th>Reviews</th>
          </tr>
        </thead>

        <tbody>
          <tr style="background-color: rgba(128, 128, 128, 0.367);">
            <th style="padding: 3em"></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr style="background-color: rgba(128, 128, 128, 0.367);">
            <th style="padding: 3em"></th>
            <th>Loading data...</th>
            <th></th>
            <th></th>
          </tr>
          <tr style="background-color: rgba(128, 128, 128, 0.367);">
            <th style="padding: 3em;"></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr style="background-color: rgba(128, 128, 128, 0.367);">
            <th style="padding: 3em;"></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </tbody>
      </table>`;
      return;
    }

    document.getElementById("data").innerHTML = `
      <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Product Name</th>
            <th>Prices</th>
            <th>Reviews</th>
          </tr>
        </thead>

        <tbody>
          ${productList
            .map((product, idx) => {
              return `<tr>
            <td>${idx + 1}</td>
            <td>${product.name}</td>            
            <td>Rs. ${product.price}</td>            
            <td>${product.reviews}</td>            
            </tr>`;
            })
            .join(" ")}
        </tbody>
      </table>
      `;
  }

  loadProducts(renderProductListTableWithData);
  renderProductListTableWithData();
}

renderData();

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var total = sum(arr);

// type is used for Babel to understand that it is jsx
// create react VDOM using reactDOM
// var app = document.getElementById("reactapp");
// var root = ReactDOM.createRoot(app);
// root.render(<h1>Introduction to React ${total}</h1>);
// inside root.render is jsx, ans that h1 is NOT AN HTML TAG
// (jsx -> javascript expression)
// for browser to understand this, we need a
// transpiler, ex. Babel, to consert jsx into
// regular js aand html, add cdn of babel,

console.log(total);
