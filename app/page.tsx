"use client";

import Image from "next/image";
import headshot from "../public/headshot2.png";
import { useState } from "react";
import SideBar from "./components/SideBar";

const styles = "flex gap-10";

export default function Home() {
  const [showMe, setShowMe] = useState(false);

  function toggle() {
    setShowMe(!showMe);
    console.log();
  }

  return (
    <div className="flex mx-2 bg-stone-800 text-red-600 h-screen">
      <div className="flex flex-col pl-28 space-y-6 w-1/2 justify-center">
        <p
          style={{
            display: showMe ? "none" : "block",
          }}
        >
          ~ I am
        </p>
        <h1
          className="text-gray-200 text-5xl"
          style={{
            display: showMe ? "none" : "block",
          }}
        >
          Austin Williams
        </h1>
        <SideBar
          styles={styles}
          cssStyle={{ display: showMe ? "none" : "block" }}
        />
        <p style={{ display: showMe ? "none" : "block" }}>Software Developer</p>
        <p
          className="text-gray-200"
          style={{ display: showMe ? "none" : "block" }}
        >
          Currently apart of the Database Management Core for the Critical
          Illness, Brain Dysfunction, and Suvivorship (CIBS) Center at
          Vanderbilt University Medical Center. Responsible for the build,
          management, and access for multiple NIH funded studies as part of the
          CIBS Center. Develop data visualization dashboards using API web
          connectors and data software Tableau. As well as built external
          modules to interact with multiple APIs to automate bulk data imports
          and exports.
        </p>
        <div
          className="h-80 overflow-y-auto"
          style={{ display: showMe ? "block" : "none" }}
        >
          <p>
            Hello, thanks for your interest in learning more about me. I started
            my career as an athletic trainer, working in all levels of sport
            from the NFL, NCAA, MLS, and secondary schools. My most recent job
            as an athletic trainer was event coordinator of event medicine,
            where I was responsible for planning and providing sports medicine
            coverage for over 40 contracted community events. I enrolled in a
            full stack web development bootcamp through Vanderbilt University`s
            Owen College of Business. After graduating in February of 2020, I
            was set and eager to start my career journey as a fullstack software
            developer. The world had different plans (COVID-19) and I spent the
            next ~14 months dilegently working and reviewing my new skill set,
            waiting for an opportunity. In April of 2021, I joined the Critical
            Illness, Brain Dysfunction, and Survivorship (CIBS) Center as an
            associate software developer - the first for their team. Currently I
            am using the technology REDCap to build and maintain my team`s
            National Institute of Health (NIH) funded studies. Along with these
            responsibilities, I build data visualization dashboards using data
            connectors between REDCap and Tableau and I have built several
            sofware solutions that interact with multiple API`s and move data
            into our REDCap projects.
          </p>
          <p>
            I am a very raw developer and eager to learn. I have taught myself
            multiple technology languages - php, next.js, tableau - without much
            mentorship and senior leadership in my field. I am a problem solver,
            my department gives me their visions and it is up to me to execute
            their
          </p>
        </div>
        <button
          className="bg-transparent hover:bg-red-600 hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded-tl-lg rounded-br-lg w-1/4"
          onClick={toggle}
        >
          About Me
        </button>
      </div>

      <div className="flex w-1/2 justify-center md:flex relative overflow-hidden">
        <Image
          className="rounded-md"
          src={headshot}
          alt="headshot"
          sizes="50vw"
          priority
          style={{
            width: "50%",
            height: "500px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-800 to-transparent" />
      </div>
    </div>
  );
}
