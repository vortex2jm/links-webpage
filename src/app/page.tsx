import Image from "next/image";
import LinkCard from "./_components/linkCard";
import ShareModal from "./_components/shareModal";
import { links, user } from "../lib/config";


export default function Home() {
  return (
    <div className="min-h-screen w-screen pt-10 pb-10 flex flex-col justify-center items-center">

      <div className="mb-10">
        <Image src={"/profile.png"} alt="profile photo" width={150} height={150} priority></Image>
      </div>

      <div className="flex flex-col justify-center items-center mb-10 text-center">
        <h2 className="font-geist font-bold text-2xl">{user.name}</h2>
        <div className="w-15 h-0.5 bg-amber-700 mx-auto mt-1 rounded-full" />
        <span className="text-neutral-500 font-normal font-geist mt-2 max-w-4/5">
          {user.description}
        </span>
      </div>

      <div className="h-fit w-m flex flex-col justify-center items-stretch rounded-xl gap-6">
        {links.map((link, index) => {
          return (
            <LinkCard key={index} title={link.title} link={link.url}>
              <link.icon />
            </LinkCard>
          )
      })}
      </div>

      <ShareModal />
    </div>
  );
}
