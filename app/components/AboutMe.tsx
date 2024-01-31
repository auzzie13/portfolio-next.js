"use client";
import React from "react";

const AboutMe = () => {

    const handleClick = event => {
        console.log(event);
    }

  return (
    <div>
      <button
        className="bg-transparent hover:bg-red-800 hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded-tl-lg rounded-br-lg"
        onClick={handleClick}
      >
        About Me
      </button>
    </div>
  );
};

export default AboutMe;
