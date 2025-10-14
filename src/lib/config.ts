import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { IconType } from "react-icons";

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
    title: "Site Pessoal",
    url: "https://joaoclev.dev.br",
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
    url: "https://www.linkedin.com/in/joão-clevelares-287b04279",
    icon: FaLinkedin
  },
  // {
  //   title: "Instagram",
  //   url: "https://instagram.com/joao_p_moura",
  //   icon: <FaInstagram />,
  // },
  {
    title: "CyVex Technology",
    url: "https://cyvex.com.br",
    icon: GrPersonalComputer
  }
];

export const user: User = {
  name: "João Clevelares",
  description: "Técnico Eletromecânico e Engenheiro de Computação em formação"
};
