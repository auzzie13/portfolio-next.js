"use client";

import { useState } from "react";



const AboutMe = () => {

  // const [showMe, setShowMe] = useState(false);

  function toggle(){
    // setShowMe(!showMe);
    console.log();
  }

  return (
    <div>
      <button
        className="bg-transparent hover:bg-red-800 hover:text-white py-2 px-4 border border-red-800 hover:border-transparent rounded-tl-lg rounded-br-lg"
        onClick={toggle}
      >
        About Me
      </button>
    </div>
  );
};

export default AboutMe;
