import Image from "next/image";
import Link from "next/link";

{/* <aside class="w-44 fixed left-0 top-0 h-screen bg-slate-700 p-10">
<h1 class="text-white text-4xl">Sidebar</h1>
</aside> */}

const SideBar = () => {
  return (
    <aside className="absolute right-0 top-0 h-full flex flex-col pr-8 gap-10 justify-center">
      <Link
        href="https://www.linkedin.com/in/austin-williams-76b75b142/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src="/linkedin.png" alt="linkedin" width={16} height={16} />
      </Link>
      <Link
        href="https://github.com/auzzie13"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src="/gh.png" alt="github" width={16} height={16} />
      </Link>
      <Link
        href="https://www.facebook.com/austin.williams.739978"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src="/fb.png" alt="facebook" width={16} height={16} />
      </Link>
      <Link
        href="mailto:auswil13@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image src="/gmail.png" alt="gmail" width={16} height={16} />
      </Link>
    </aside>
  );
};

export default SideBar;
