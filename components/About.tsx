import { FC } from "react";

interface AboutProps {
    
}
 
const About: FC<AboutProps> = () => {
    return ( <>
    <main className="p-8">
    <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] w-[60vw]"></div>
      <div className="bg-[#dbd7fb] absolute -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

<h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-600 dark:text-gray-800  mt-2">Brief Intro</h3>
<p className="text-gray-500 dark:text-gray-800">Hello there! I&apos;m Dipak Khade, a passionate and skilled web developer with expertise in crafting robust and scalable web applications. </p>

<p className="text-gray-500 dark:text-gray-800">currently learning WebRTC. I am fascinated by the possibilities it offers in building real-time communication applications, and I&apos;m always eager to dive deeper into its intricacies.</p>

<p className="text-gray-500 dark:text-gray-800">With a focus on creating scalable websites, I bring a blend of creativity and technical prowess to every project. Whether it&apos;s optimizing performance, ensuring a seamless user experience, or diving into the world of WebSockets for real-time updates, I thrive on turning ideas into interactive digital experiences.</p>


<div className="text-gray-500 dark:text-gray-800 ml-[40vw] md:ml-[80vw] mt-4"><p>Cheers,</p>
<p className="text-purple-500">Dipak Khade</p>
</div>


    </main>
    </> );
}
 
export default About;