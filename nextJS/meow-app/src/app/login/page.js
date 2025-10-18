"use client";

import Link from "next/link";
import { useEffect } from "react";

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

  const loginHandler = (e) => {};

  return (
    <div style={{ width: "100vw" }}>
      <h1>Login Page 🔐</h1>
      {/* <a href="/">Go back home</a> */}
      <form
        action="/api/login"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />

        <button type="submit">Login</button>
      </form>
      <Link href="/">Go back home</Link>
    </div>
  );
}
