"use client";

import { useState } from "react";

const Signup = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, age, email, password }),
    });

    const data = await response.json();

    console.log(response)

    if (response.status === 200) {
      alert("user created");
    } else {
      alert("error happened");
    }
  };
  return (
    <>
      <div className=" flex justify-center bg-purple-500">
        <form className="flex flex-col" action="submit">
          <input
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            placeholder="firstname"
          />{" "}
          <br />
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="lastname"
          />{" "}
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="email"
          />{" "}
          <br />
          <input
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="age"
          />
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <br />
          <button onClick={handleSubmit}>submit</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
