import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';
import Link from "next/link";
interface AboutProps {
    
}
 
const About: FC<AboutProps> = () => {
    return ( <>
    <main className="p-8 dark:text-zinc-200 text-zinc-800">
   

<h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center  mt-2">Brief Intro</h3>
<p>Hello there! I&apos;m Dipak Khade </p>

<p> I am fascinated by the possibilities it offers in building real-time communication applications, and I&apos;m always eager to dive deeper into its intricacies.</p>

<p>With a focus on creating scalable websites, I bring a blend of creativity and technical prowess to every project. Whether it&apos;s optimizing performance, ensuring a seamless user experience, or diving into the world of WebSockets for real-time updates, I thrive on turning ideas into interactive digital experiences.</p>

<div className="ml-12 md:ml-96 mt-4">
<div className=" hover:cursor-pointer flex text-xl mb-4 hover:text-blue-500">
            <FiMail/>
            <p className="text-sm ml-4">dipakhade214@gmail.com</p>  
          </div>
          <div>
            <ul className="flex mt-4 space-x-5 items-center md:mt-0 lg:mb-6 text-sm font-medium sm:mb-0 mb-6">
              <li>
                <Link href={"https://github.com/DipakKhade"} target="_blank">
                  <FaGithub className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link href={"https://twitter.com/dipakKhade272"} target="_blank">
                  <FaXTwitter className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link href={"https://www.linkedin.com/in/dipak-khade-715389252/"} target="_blank">
                  <FaLinkedin className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>

              <li>
                <Link
                  href={
                    "https://instagram.com/dipakkhade272?igshid=OGQ5ZDc2ODk2ZA=="
                  }
                  target="_blank"
                >
                  <FaInstagram className="text-2xl hover:text-blue-700 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
                </Link>
              </li>
        
            </ul>


         


          </div>

          </div>

    </main>
    </> );
}
 
export default About;