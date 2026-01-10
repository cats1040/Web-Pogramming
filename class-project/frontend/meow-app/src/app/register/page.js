"use client";

import { useRef } from "react";
import Button from "../components/button";

export default function Register() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registerSubmitHandler = async (e) => {
    e.preventDefault(); // prevent page reload

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert("Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ margin: "50px" }}>
      <form className="max-w-sm mx-auto" onSubmit={registerSubmitHandler}>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium">Your name</label>
          <input
            type="text"
            ref={nameRef}
            required
            placeholder="FirstName LastName"
            className="w-full px-3 py-2.5 border rounded"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium">Your email</label>
          <input
            type="email"
            ref={emailRef}
            required
            placeholder="name@email.com"
            className="w-full px-3 py-2.5 border rounded"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            ref={passwordRef}
            required
            placeholder="••••••••"
            className="w-full px-3 py-2.5 border rounded"
          />
        </div>

        <div className="text-center">
          <Button variant="light" type="submit">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
