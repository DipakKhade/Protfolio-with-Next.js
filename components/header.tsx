'use client';
import { FC } from "react";
import {motion} from 'framer-motion'
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from 'next/navigation';


interface HeaderProps {
    
}
 
const Header: FC<HeaderProps> = () => {
  const currentRoute = usePathname();
    return ( <header className="z-[777] relative">
        <motion.div 
         className="fixed top-0 left-1/2 h-[3rem] w-[95vw] rounded-lg border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
         initial={{ y: -100, x: "-50%", opacity: 0 }}
         animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

<nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 ">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500  ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.routename}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
             
                className={clsx(
                 {
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300":true,

                  'text-purple-700 dark:text-purple-700':link.routename==currentRoute
                 }
               
                )}
                href={link.href}
               
              >
                {link.name}
                
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header> );
}
 
export default Header;