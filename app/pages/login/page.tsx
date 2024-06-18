"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useStore from "@/components/store";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, login, logout, userName, setUserName, loginTimestamp }: any =
    useStore(); //we are importing the login function and isLogin condition from the store

  // console.log(firstName, lastName, email, password)

  useEffect(() => {
    console.log("isLoggedin:", isLogin);
  }, [isLogin]);

  const addNewuserHandler = async (e: any) => {
    e.preventDefault();

    let response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log(data); //we see this in browser which is the response of the api. Its an json object

    // setUserName(data.userName)

    if (response.ok && data.message === "login successful") {
      login();

      setUserName(data.userName);

      console.log("down console ", isLogin);
      console.log(`welcome ${data.userName}`); //we also sent the userName as a response.When we post he e mail and password.
      // Redirect to the home page after successful login
      router.push("/");
      alert("User logged in");
    } else if (data.message === "Invalid password") {
      alert("Password didnot matched ");
    } else if (data.message === "user not found") {
      alert("user not found");
    } else {
      alert("please enter the correct information");
    }
  };

  return (
    <>
      <h1>Hey, This is login page</h1>

      <p>{}</p>

      <div className="bg-stone-400 flex items-center justify-center h-72">
        <form>
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="email"
            name="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
          />
          <br />
          <br />
          <button
            onClick={addNewuserHandler}
            className="bg-green-400 outline-dotted"
          >
            login
          </button>
        </form>

        {userName && (
          <p>Welcome, {userName}</p> // Conditionally render the username
        )}
      </div>
    </>
  );
};

export default Login;
