import Home from "./page";
// import Login from "./login/login";
import "@/app/global.css";
import Header from "./components/header";

export const metadata = {
  title: "Meow App",
  description: "An e-commerce app for cats 🐱",
};

function layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

export default layout;
