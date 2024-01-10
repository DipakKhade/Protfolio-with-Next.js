import { FC } from "react";
import Link from "next/link";
interface WorkProps {
    
}
 
const Work: FC<WorkProps> = () => {
    return ( <>
    <section className="dark:bg-base-100 antialiased ">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-2xl mt-12 font-bold text-gray-600 dark:text-gray-800">
        Projects
      </h2>
      
    </div>

    <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      <div className="space-y-4">
        <span
          className="  text-white text-xs font-xl inline-flex items-center px-2.5 py-0.5 rounded bg-green-400">
         Cloth Inference
        </span>
        <h3 className="text-2xl font-bold leading-tight">
         e commerce website
        </h3>
        <p className="text-lg font-normal text-gray-500 ">
           Next js 14 , JavaScript , Tailwind CSS , MongoDB , Next Auth
        </p>

        <div className="flex space-x-4 ml-4">
      <Link href={'https://github.com/DipakKhade/ClothInference/tree/main/clothinference'} target="_blank" className="text-white hover:bg-purple-600 bg-purple-500 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Visit repo
         
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd" />
          </svg>
          </Link>
      <Link href={'https://cloth-inference-cd5c-git-main-dipak-khades-projects.vercel.app/'} target="_blank"  className="text-white hover:bg-green-600 bg-green-500 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Visit deployed site
         
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd" />
          </svg>
          </Link>
          </div> 
      </div>

      <div className="space-y-4">
        <span
          className="bg-purple-400 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
          Hemorhage Detection
        </span>
        <h3 className="text-2xl font-bold leading-tight ">
          detecting bleeding in brain
        </h3>
        <p className="text-lg font-normal text-gray-500 ">
          HTML , CSS , JavaScript , Flask , Python , R
        </p>
        <Link href={'https://github.com/DipakKhade/MSc-Project'} target="_blank" className="text-white bg-purple-500 hover:bg-purple-600 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Visit repo
         
         <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
           fill="currentColor">
           <path fillRule="evenodd"
             d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
             clipRule="evenodd" />
         </svg>
         </Link>
      </div>




      <div className="space-y-4">
        <span
          className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded bg-purple-200 text-white">
          messenging 
        </span>
        <h3 className="text-2xl font-bold leading-tight text-gray-600 ">
        messenging Web application
        </h3>
        <p className="text-lg font-normal text-gray-200 ">
          Next js 14 , TypeScript , Tailwind CSS , upstash Database , Next Auth
        </p>
        <Link href={'https://github.com/DipakKhade/messenging-Web-Application-with-Next.js'} target="_blank" className="text-white hover:bg-purple-400 bg-purple-300 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Visit repo
         
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd" />
          </svg>
          </Link>
      </div>



      <div className="space-y-4">
        <span
          className="bg-purple-400 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
          file share 
        </span>
        <h3 className="text-2xl font-bold leading-tight ">
        file share webapp
        </h3>
        <p className="text-lg font-normal text-gray-500 ">
         Express , Node js , MongoDB , Multer , ejs
        </p>
        <Link href={'https://github.com/DipakKhade/File-Sharing-webapp'} target="_blank" className="text-white bg-purple-500 hover:bg-purple-600 bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Visit repo
         
         <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
           fill="currentColor">
           <path fillRule="evenodd"
             d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
             clipRule="evenodd" />
         </svg>
         </Link>
      </div>

    </div>
  </div>
</section>
    </> );
}
 
export default Work;