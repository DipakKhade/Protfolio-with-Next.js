import { FC } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from 'react-icons/fa'
import { TbBrandNextjs } from "react-icons/tb";;
interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        

<footer className="bg-violet-200  rounded-lg shadow  m-4 dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

        {/* <div className="sm:flex sm:items-center ">
        
        
                
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
        </div> */}
        <div className="text-gray-500 dark:text-gray-800 flex space-x-2"><TbBrandNextjs className="mt-1"/><p>Coded In Next.js 14</p></div>

<div>
          <ul className="flex mt-4 dark:text-gray-800  space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium text-gray-500  sm:mb-0 ml-24 md:ml-[70vw]"
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
</footer>



     );
}
 
export default Footer;