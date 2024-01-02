import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/mkbhd22.png";
import { MdContactMail } from "react-icons/md";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    
      <div className="navbarfixed flex bg-base-300 z-10 p-2 fixed top-0 w-full m-0 ">
        <div className="flex-1">
          <Link href={"/"} className="flex text-gray-900  md:text-xl ml-18 cursor-pointer font-bold mt-3 w-32 hover:text-blue-500 transition ease-in-out hover:-translate-y-1 ">
           <span className="text-blue-600">D</span> ipak  <span className="text-blue-600 m-0 p-0 ml-2">K</span>hade
          </Link>
        </div>
             <Link href={'/connect'}> <button className="btn btn-active mr-6 mt-0 border-blue-500"><MdContactMail className="text-2xl hover:text-blue-600 transition ease-in-out hover:-translate-y-1 hover:scale-110" />
</button></Link>
        <div className="flex-none">
          <div className="dropdown dropdown-end"></div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar md:mr-6 bg-blue-300"
            >
              <div className="w-10 rounded-full ">
                <Image src={logo} width={50} alt="logo"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Navbar;
