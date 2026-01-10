"use client";

import Button from "../components/button";
import styles from "./login.module.css";
import { useRef } from "react";

export default function Login() {
  // this is rendered on server-side,
  // there is no access to localStorage
  // so, app crashed here, as local storage is not defined
  // it is a browser feature. Even if we use "use client"
  // it will still go to server-side
  // to prevent this, use useEffect hook
  // localStorage.setItem("token", "newToken");
  // useEffect(() => {
  //   localStorage.setItem("token", "newToken");
  // }, []);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginSubmitHandler = async (e) => {
    e.preventDefault(); // prevent page reload
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:5000/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("User loggedin successfully!");
      } else {
        alert("Failed to login user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ width: "100vw" }}>
      <h1 className={styles.header} style={{ textAlign: "center" }}>
        Login Page
      </h1>

      <form onSubmit={loginSubmitHandler} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="text-center mt-4">
          <Button variant="primary" onClick={loginSubmitHandler}>
            Login Button
          </Button>
        </div>
      </form>
    </div>
  );
}
