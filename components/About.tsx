import { FC } from "react";

interface AboutProps {
    
}
 
const About: FC<AboutProps> = () => {
    return ( <>
    <main className="p-8">

<h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-600 dark:text-gray-800  mt-2">Brief Intro</h3>
<p className="text-gray-500 dark:text-gray-800">Hello there! I&apos;m Dipak Khade, a passionate and skilled web developer with expertise in crafting robust and scalable web applications. </p>

<p className="text-gray-500 dark:text-gray-800">My love for cutting-edge technologies drives me to explore the exciting realm of WebRTC. I am fascinated by the possibilities it offers in building real-time communication applications, and I&apos;m always eager to dive deeper into its intricacies.</p>

<p className="text-gray-500 dark:text-gray-800">With a focus on creating scalable websites, I bring a blend of creativity and technical prowess to every project. Whether it&apos;s optimizing performance, ensuring a seamless user experience, or diving into the world of WebSockets for real-time updates, I thrive on turning ideas into interactive digital experiences.</p>


<div className="text-gray-500 dark:text-gray-800 ml-[40vw] md:ml-[80vw] mt-4"><p>Cheers,</p>
<p className="text-purple-500">Dipak Khade</p>
</div>


    </main>
    </> );
}
 
export default About;