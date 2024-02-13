import Image from "next/image";
import Link from "next/link";

interface Props {
  styles: string
}

const SideBar = ({ styles }: Props ) => {
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/austin-williams-76b75b142/",
      src: "/linkedin.png",
    },
    { 
      label: "Github", 
      href: "https://github.com/auzzie13", 
      src: "/gh.png" 
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/austin.williams.739978",
      src: "/fb.png"
    },
    { 
      label: "Email", 
      href: "mailto:auswil13@gmail.com",
      src: "/gmail.png"
    },
  ];

  // "fixed right-0 top-4 h-full flex flex-col pr-8 gap-10 justify-center"
  // "fixed right-0 top-4 h-full flex flex-col pr-8 gap-10 justify-center"

  return (
    <aside className={styles}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          rel="noopener noreferrer"
          target="_blank">
            <Image src={link.src} alt={link.label} width={16} height={16} />
        </Link>
      ))}
    </aside>
  );
};

export default SideBar;
