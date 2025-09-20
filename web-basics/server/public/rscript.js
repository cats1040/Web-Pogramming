var app = document.getElementById("reactapp");
var root = ReactDOM.createRoot(app);

// root.render(<footer>----------Introduction to React----------</footer>);
root.render(<DescriptionComponent />);

// Pascal casing methods are treated as React components
// can only accept object as arguments

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
