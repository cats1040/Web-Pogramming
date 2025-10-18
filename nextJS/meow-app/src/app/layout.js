import Home from "./page";
// import Login from "./login/login";

export const metadata = {
  title: "Meow App",
  description: "An e-commerce app for cats 🐱",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default layout;
