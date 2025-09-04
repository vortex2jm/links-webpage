import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";

import LinkCard from "./(components)/linkCard";
import ShareModal from "./(components)/shareModal";


export const metadata = {
  title: "João Clevelares - Links",
  description: "Conecte-se com João",
  openGraph: {
    title: "João Clevelares - Links",
    description: "Conecte-se com João",
    url: "https://links.joaoclev.dev.br",
    siteName: "João - Links",
    images: [
      {
        url: "https://github.com/vortex2jm.png",
        width: 500,
        height: 500,
        alt: "Profile photo",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

const links = [
  {
    title: "GitHub",
    url: "https://github.com/vortex2jm",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/joão-clevelares-287b04279",
    icon: <FaLinkedin />,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/joao_p_moura",
    icon: <FaInstagram />,
  },
  {
    title: "Soluções de Software",
    url: "https://cyvex.com.br",
    icon: <GrPersonalComputer />,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-screen pt-10 pb-10 flex flex-col justify-center items-center">

      <div className="mb-10">
        <Image src={"/profile.png"} alt="profile photo" width={150} height={150} priority></Image>
      </div>

      <div className="flex flex-col justify-center items-center mb-10 text-cente">
        <h2 className="font-geist font-bold text-2xl">João Clevelares</h2>
        <div className="w-15 h-0.5 bg-indigo-400 mx-auto mt-1 rounded-full" />
      </div>

      <div className="h-fit w-m flex flex-col justify-center items-stretch rounded-xl gap-6">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} link={link.url}>
            {link.icon}
          </LinkCard>
        ))}
      </div>

      <ShareModal />
    </div>
  );
}
