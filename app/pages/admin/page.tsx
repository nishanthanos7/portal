"use client";

import React, { useState } from "react";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");

  console.log(category);

  async function handleSubmit(e: any) {
    e.preventDefault();

    let response = await fetch("/api/article", {
      method: "POST",
      body: JSON.stringify({ title, body, imageUrl, category, author }),
    });

    console.log(response);
  }

  return (
    <>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <br />

          <textarea
            onChange={(e) => setTitle(e.target.value)}
            className=" w-80 h-14 bg-slate-50"
            placeholder="TITLE"
            name=""
            id=""
          ></textarea>

          {title}
          <br />

          <div>
            <hr />
          </div>

          <textarea
            onChange={(e) => setBody(e.target.value)}
            className="bg-slate-200 w-80 h-60"
            placeholder="BODY"
            name=""
            id=""
          ></textarea>

          <p>{body}</p>
          <br />

          <input
            className="bg-blue-400 w-80"
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image url"
          />
          <p>{imageUrl}</p>

          <br />
         


          <input
            onChange={(e) => setAuthor(e.target.value)}
            className="bg-red-400 w-80"
            type="text"
            placeholder="Author name"
          />
          
          <br />
          <div>
            Enter category::

            <input onChange={(e) => setCategory(e.target.value)} type="text" />
            {/* <select onChange={(e) => setCategory(e.target.value)} name="" id="">
              <option value="">Select the category</option>
              <option value="news">news</option>
              <option value="international">international</option>
              <option value="interview">interview</option>
              <option value="sports">sports</option>
            </select> */}

            {category}

            
          </div>

          <br />
          
          

          <button className="bg-purple-500">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AdminPage;
