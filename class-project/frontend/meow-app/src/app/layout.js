import "@/app/global.css";
import { Suspense } from "react";
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
        {/* Till the return statement is not hit in 
        the children, it will display the fallback UI */}
        <Suspense fallback={<h2>Loading...</h2>}>
          {children}
          {/* looks for page.js in app folder, and next
           dynamically puts it here */}
        </Suspense>
      </body>
    </html>
  );
}

export default layout;
