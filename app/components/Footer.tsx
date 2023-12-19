import { FC } from "react";
import logo from "../../images/mkbhd22.png";
import Image from "next/image";
import Link from "next/link";
interface FooterProps {
    
}
 
const Footer: FC<FooterProps> = () => {
    return ( 
        

<footer className="bg-blue-200 rounded-lg shadow  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        
        <Link href={'/'} className="flex">
                <Image src={logo} width={80} alt="logo" className="rounded-full">
                </Image>
                <span className="self-center text-xl ml-4 font-semibold whitespace-nowrap">Thanks for Visiting !</span>

                </Link>
            <ul className="flex flex-wrap items-center mt-6 md:mt-0 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href={'https://github.com/DipakKhade'} target="_blank" className="hover:underline me-4 md:me-6 text-black">github</Link>
                </li>
                <li>
                <Link href={'https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=='} target="_blank" className="hover:underline me-4 md:me-6 text-black">instagram</Link>
                </li>
                <li>
                <Link href={'/connect'} className="hover:underline me-4 md:me-6 text-black">connect</Link>
                </li>
               
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
       
    </div>
</footer>



     );
}
 
export default Footer;