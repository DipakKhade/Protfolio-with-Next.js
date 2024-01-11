'use client';
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa';
import { SiDiscord } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import {useSession , signIn, signOut} from 'next-auth/react'
interface DiscordButtonProps {}

const DiscordButton: FC<DiscordButtonProps> = () => {
  const {data:session , status} = useSession()
  // console.log(session,status)

  
  
  return (
    <div className=" md:ml-8 ml-4 sm:mt-24 mt-36">
      <div>
        <h3 className="text-xl font-semibold flex text-purple-700">
          <hr className="my-6 border-purple-500 sm:mx-auto dark:border-gray-200 lg:my-8" />
          <div className="flex sm:mr-[90vw]">
            <hr className="w-6 border-purple-500 sm:mx-auto dark:border-gray-200 mt-3 " />
            Hello</div>
        </h3>

        <div className="text-3xl font-mono dark:text-white text-gray-600">
          I&apos;m Dipak Khade
        </div>
        <p className="text-gray-600 mt-2">Fullstack Developer </p>
        

        <div>
          <ul className="flex mt-4 dark:text-gray-800  space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-500  sm:mb-0 sm:hidden"
             >
        <div>|</div>
            
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://twitter.com/dipakKhade272'} target="_blank"><FaXTwitter className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>

                <li>
                <Link href={'https://www.linkedin.com/in/dipak-khade-715389252/'} target="_blank"><FaLinkedin className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>


                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
               
               
               
            </ul>
          </div>

        <hr className="my-6 border-purple-500 sm:mx-auto dark:border-gray-200 lg:my-8" />
      </div>
      <div className="flex flex-wrap space-y-6 sm:space-y-0 sm:space-x-6">
      <Link href={'https://discord.com/channels/1195005205989826691/1195005207248122008'}  target='_blank'>
      <div className="relative group cursor-pointer hover:text-purple-400 dark:hover:text-purple-400">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 dark:bg-slate-800 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="flex space-x-2">
              <p className="text-gray-600 text-xl font-bold dark:text-white ">
                Join Discord Server
              </p>
              
              <SiDiscord className="text-2xl mt-1 dark:text-white"/>
              
            </div>
          </div>
        </div>
      </div>
      </Link>
     
     {
      status=='unauthenticated'?
       <button onClick={()=>signIn("github")}>
      <div className="relative group cursor-pointer hover:text-purple-400 dark:hover:text-purple-400">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 dark:bg-slate-800 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="flex space-x-2">
              <p className="text-gray-600 text-xl font-bold dark:text-white ">
                Login With GitHub
              </p>
              
              <FaGithub className="text-2xl mt-1 dark:text-white"/>
              
            </div>
          </div>
        </div>
      </div>
      </button>

      :
      <button onClick={()=>signOut()}>
      <div className="relative group cursor-pointer hover:text-purple-400 dark:hover:text-purple-400">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-3 bg-white ring-1 dark:bg-slate-800 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="flex space-x-2">
            <div>
              {session?.user?.image !== undefined && session?.user?.image !== null && (
  <Image
    src={session.user.image}
    width={50}
    height={50}
    alt="img"
    className="rounded-full"
  />
)}
                </div>
              <p className="text-gray-600 text-xl font-bold dark:text-white mt-2">
                Sign Out
              </p>
             
              
            </div>
          </div>
        </div>
      </div>
      </button>
     }
     

      </div>
    </div>
  );
};

export default DiscordButton;
