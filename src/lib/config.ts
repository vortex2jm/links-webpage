import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { PiEyeFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaBlog, FaEye } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";

interface Link {
  title: string;
  url: string;
  icon: IconType;
}

interface User {
  name: string;
  description: string;
}

export const links: Link[] = [
  {
    title: "Página Pessoal",
    url: "https://joaoclev.com",
    icon: IoGlobeOutline
  },
  // {
  //   title: "Blog",
  //   url: "https://",
  //   icon: FaBlog
  // },
  {
    title: "GitHub",
    url: "https://github.com/vortex2jm",
    icon: FaGithub
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/joaoclevelares",
    icon: FaLinkedin
  },
  {
    title: "Criamus",
    url: "https://criamus.com",
    icon: PiEyeFill
  },
  {
    title: "CyVex",
    url: "https://cyvex.com.br",
    icon: GrPersonalComputer
  }
];

export const user: User = {
  name: "João Clevelares",
  description: "Técnico Eletromecânico, Engenheiro de Computação em formação, Cofundador da Criamus e Fundador da CyVex."
};
