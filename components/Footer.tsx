import { FC } from "react";
import logo from "../images/mkbhd22.png";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        

<footer className="bg-violet-200  rounded-lg shadow  m-4 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        <div className="sm:flex sm:items-center ">
        
        
                
            <ul className="flex space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-black  sm:mb-0 ">
            <Link href={'/'}>
            <li>
               <Image src={logo} width={40} alt="logo" className="rounded-full">
                </Image>
               </li>

               </Link>
              
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" ><FaGithub className="text-2xl ml-32 md:ml-[70vw] hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" ><FaInstagram className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
                <li>
                <Link href={'https://twitter.com/dipakKhade272'} ><FaXTwitter className="text-2xl hover:text-purple-700 transition ease-in-out hover:-translate-y-1 hover:scale-110"/></Link>
                </li>
               
            </ul>
        </div>
        <hr className="my-6 border-purple-500 sm:mx-auto dark:border-gray-200 lg:my-8" />
       
    </div>
</footer>



     );
}
 
export default Footer;