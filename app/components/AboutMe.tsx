"use client";
import React, { useState } from "react";

const AboutMe = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button
        className="bg-transparent hover:bg-red-800 hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded-tl-lg rounded-br-lg"
        onClick={() => setShow(!show)}
      >
        About Me
      </button>
    </div>
  );
};

export default AboutMe;
