import Image from "next/image";
import headshot from "../public/headshot2.png";
import AboutMe from "./components/AboutMe";
// import SideBar from "./components/SideBar";
import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="flex mx-2 bg-stone-800 text-red-800">
      <div id="aboutMeContainer" className="flex flex-col pl-28 space-y-6 w-1/2 justify-center h-screen">
        <p>~ I am</p>
        <h1 className="text-gray-200 text-5xl">Austin Williams</h1>
        <p>Software Developer</p>
        <p className="text-gray-200">
          Currently apart of the Database Management Core for the Critical
          Illness, Brain Dysfunction, and Suvivorship (CIBS) Center at
          Vanderbilt University Medical Center. Responsible for the build,
          management, and access for multiple NIH funded studies as part of the
          CIBS Center. Develop data visualization dashboards using API web
          connectors and data software Tableau. As well as built external
          modules to interact with multiple APIs to automate bulk data imports
          and exports.
        </p>
        <AboutMe />
        <Button>About Me</Button>
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
