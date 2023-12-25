import { FC } from "react";
import Image from "next/image";
import htmllogo from "../../images/html_logo.png";
import csslogo from "../../images/css_logo.png";
import tailwindlogo from "../../images/tailwind_logo.png";
import jslogo from "../../images/js_logo.webp";
import tslogo from "../../images/ts_logo.png";
import react from "../../images/reactjs_logo.png";
import nextlogo from "../../images/next_logo.png";
import nodejslogo from "../../images/nodejs_logo.png";
import expressjslogo from "../../images/express_logo.png";
import nextauthlogo from "../../images/nextauth_logo.png";
import mongologo from "../../images/mongo_logo.jpg";
import mysqllogo from "../../images/mysql_logo.jpg";
import dockerlogo from "../../images/docker_logo.webp";
import gitlogo from "../../images//git_logo.png";


interface KonwnThingsProps {}

const KonwnThings: FC<KonwnThingsProps> = () => {
  return (
    <>
    {/* //front end */}
    <h2 className="text-2xl mt-6 md:ml-[44vw] ml-28 font-bold">What I Know</h2>
    <div className="md:flex">
     
      <div className="md:w-[25vw] w-[80vw] p-4 bg-blue-200 border border-gray-200 rounded-lg mt-8 shadow sm:p-8 ml-9  ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none  text-black">
            FrontEnd
          </h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={htmllogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800 truncate hover:pb-2 ease-in-out duration-300">
                    HTML
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={csslogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    CSS
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={tailwindlogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    Tailwind
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={jslogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    JavaScript
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={tslogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    TypeScript
                  </p>
                </div>
              </div>
            </li>

            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={react}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    React js
                  </p>
                </div>
              </div>
            </li>

            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={nextlogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    Next js 14
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
 

      {/*// backend */}
      <div className="md:w-[25vw] w-[80vw] p-4 bg-blue-200 border border-gray-200 rounded-lg mt-8 shadow sm:p-8 ml-9  ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none  text-black">
            BackEnd
          </h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={nodejslogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800 truncate hover:pb-2 ease-in-out duration-300">
                    Node js
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={expressjslogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    Express js
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={nextauthlogo}
                    width={45}
                    // height={40}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    Next Auth
                  </p>
                </div>
              </div>
            </li>
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={jslogo}
                    width={45}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    JavaScript
                  </p>
                </div>
              </div>
           

           

            
          </ul>
        </div>
      </div>




      {/* //database */}
      <div className="md:w-[25vw] w-[80vw] p-4 bg-blue-200 border border-gray-200 rounded-lg mt-8 shadow sm:p-8 ml-9  ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none  text-black">
            DataBase
          </h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={mongologo}
                    // width={40}
                    height={40}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800 truncate hover:pb-2 ease-in-out duration-300">
                    MongoDB
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={mysqllogo}
                    // width={45}
                    height={40}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    MySql
                  </p>
                </div>
              </div>
            </li>
            
            
           

           

            
          </ul>
        </div>
      </div>


{/* Devops */}
<div className="md:w-[25vw] w-[80vw] p-4 bg-blue-200 border border-gray-200 rounded-lg mt-8 shadow sm:p-8 ml-9  ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none  text-black">
            Devops
          </h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 ">
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={dockerlogo}
                    // width={40}
                    height={40}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800 truncate hover:pb-2 ease-in-out duration-300">
                    Docker
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center ">
                <div className="flex-shrink-0">
                  <Image
                    src={gitlogo}
                    // width={45}
                    height={40}
                    className="rounded-full"
                    alt="img"
                  ></Image>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-800  truncate hover:pb-2 ease-in-out duration-300">
                    GIT
                  </p>
                </div>
              </div>
            </li>
            
            
           

           

            
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default KonwnThings;
