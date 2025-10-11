var app = document.getElementById("reactapp");
var root = ReactDOM.createRoot(app);

// root.render(<footer>----------Introduction to React----------</footer>);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pascal casing methods are treated as React components
// can only accept object as arguments

function App() {
  return (
    <div>
      <DescriptionComponent name="Valid Name"></DescriptionComponent>
      <LikesComponent></LikesComponent>
      {/* <Likes2Component></Likes2Component> */}
      <ProductComponent></ProductComponent>
      <FormComponent></FormComponent>
    </div>
  );
}

function DescriptionComponent(props) {
  return (
    // React fragment <></>
    <div>
      <h1>React managed code {props.name ?? "Guest User"}</h1>
      <p>
        Description here: Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nam animi, illum sunt vitae repellat atque, in adipisci sit
        ratione maiores reprehenderit qui! Temporibus repudiandae odit debitis
        incidunt quidem doloribus itaque magnam, reprehenderit dicta, quae
        minima consequuntur. Aspernatur quas maiores voluptatem.
      </p>
    </div>
  );
  // This is not HTML
  // h1 -> React Element
}

function LikesComponent(props) {
  //   let likes = 25;
  //   function setLikes() {
  //     likes = likes + 1;
  //     console.log("Likes", likes);
  //   }
  // SET STATE METHODS ARE ASYNCHRONOUS
  let [likes, setlikes] = React.useState(0);

  let likesLocal = 1

  function updateLikes() {
    setlikes(likes + 1);
    console.log("Likes", likes);
    likesLocal = likesLocal + 1
  }

  function updateDisLikes() {
    setlikes(likes + 1);
    console.log("Likes", likes);
  }

  return (
    <>
      <p>Likes {likes}</p>
      <Button label="Like" clickBehavior={updateLikes} />
      <Button label="DisLike" clickBehavior={updateDisLikes} />
      <br />
    </>
  )
}

function Likes2Component(props) {
  const [liked, setLiked] = React.useState("no");
  // let initialLikesCount = useRef(20);

  // No array
  React.useEffect(() => {
    // called on every re-render
  });

  // ---------------------------------------------------------
  // Empty array - Correct
  React.useEffect(() => {
    // fetch the backend data
    const data = fetchData();
    initialLikesCount = data
    // return () => {}; // cleanup function
  }, []);
  function fetchData() {
    // code to fetch data from backend
  }
  fetchData(); // This will lead fetchData functiion being called on every re-render
  // let likes =20; // This will lead initilization of likes to 20 on every re-render
  // ---------------------------------------------------------

  // Array with dependencies
  React.useEffect(() => {
    // send liked data backend
  }, [liked]);

  const updateLiked = () => {
    if (liked === "no") {
      setLiked("yes");
    } else {
      setLiked("no");
    }
  };
  return (
    <>
      <br />
      <section>This is my first comment</section>
      <p>Liked - {liked}</p>
      <Button
        label={liked === "no" ? "Like" : "Dislike"}
        clickBehavior={updateLiked}
      ></Button>
    </>
  );
}

function ProductComponent(props) {
  const [productsList, setProductsList] = React.useState([]);
  React.useEffect(() => {
    setTimeout(() => {
      setProductsList(productsListFromServer);
    }, 2000);
  }, []);

  const [show, setShow] = React.useState(false);

  function toggleDisplayText() {
    show ? setShow(false) : setShow(true);
  }
  return (
    <>
      <h3>Products List</h3>
      {productsList.length === 0 ? (
        <p>Loading data from server...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, index) => {
              return (
                <tr key={`index-${product.name}`}>
                  <td>${index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      `{show ? <p> {show ? "Welcome user" : ""} </p> : ""}
      <Button label="Show Welcome text" clickBehavior={toggleDisplayText} />
    </>
  );
}

function Button(props) {
  
  return (
    <button
      style={{
        margin: "5px",
        padding: "5px",
        border: "2px solid black",
        fontWeight: 500,
      }}
      onClick={props.clickBehavior}
    >
      {props.label}
    </button>
  );
}

function FormComponent(props) {
  const [arr1, setArray1] = React.useState(["TexxtBox1", "TextBox2", "TextBox3"]);

  // does not re-renders components
  const temp = React.useRef(10);

  // React.useEffect(() => {
  //   // called on every re-render
  // });

  // React.useEffect(() => {
  //   // fetch the backend data
  // }, []);

  // React.useEffect(() => {
  //   // send liked value to backend
  // }, [liked]);

  // initialzed again and again
  // fixed with memoization
  function changeOrder() {
    const updatedArray1 = [...arr1].reverse();
    setArray1(updatedArray1);

    temp.current = temp.current + 1;
    console.log(temp);
  }

  /**
   * re-renders on every refresh, BAD BAD
   * use useEffect
   * fetchData(); BAD!
   */

  // good
  // React.useEffect(() => {
  //   fetchData();
  // }, [arr1]);

  return (
    <div>
      {arr1.map((item) => {
        return (
          <div key={`${item}`}>
            <input placeholder={item}/>
          </div>
        )
      })}

      <Button label="Change order" clickBehavior={changeOrder} />
    </div>
  );
}