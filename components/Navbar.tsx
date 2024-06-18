"use client";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleDropdown = () => {
    setIsHovered(!isHovered);
  };

  const notToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div className="">
        <ul className="flex justify-evenly bg-slate-400 h-20 items-center font-semibold ">
          <li>
            <Link href={"/"}>गृहपृष्ठ</Link>
          </li>

          <li>
            <Link href={"/pages/news"}>समाचार</Link>
          </li>

          <li>
            <Link href={"/pages/science"}>विज्ञान प्रबिधि </Link>
          </li>

          <li>
            <Link href={"/pages/interview"}>अन्तर्वार्ता</Link>
          </li>
          {/* 
          <li>
            <Link href={"/others/sports"}>खेलकुद</Link>
          </li> */}
          {/* <li>
            <Link href={"/others/entertainment"}>मनोरञ्जन</Link>
          </li> */}

          <li>
            <Link href={"/pages/international"}>
              राष्ट्रिय र अन्तरराष्ट्रिय
            </Link>
          </li>

          <li>
            <Link href={"/pages/states"}>प्रदेश </Link>
          </li>

          <Link href={"/pages/login"}>Login</Link>
          <Link href={"/pages/signup"}>signup</Link>

          <li
            onMouseEnter={toggleDropdown}
            onMouseLeave={notToggle}
            className=" px-8 py-14"
          >
            <Link href={"#"}>अन्य </Link>
          </li>

          {/* <Dropdown /> */}
        </ul>

        {isHovered && (
          <div
            className=" flex items-end justify-end"
            onMouseEnter={toggleDropdown}
            onMouseLeave={notToggle}
          >
            {" "}
            <Dropdown />
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
