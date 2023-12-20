import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/mkbhd22.png";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    
      <div className="navbarfixed flex bg-base-300 z-10 p-2">
        <div className="flex-1">
          <Link href={"/"} className="btn text-gray-900 btn-ghost md:text-xl ml-18 cursor-text hover:bg-blue-500">
            Dipak Khade
          </Link>
        </div>
             <Link href={'/connect'}> <button className="btn btn-active mr-6 mt-0 hover:bg-blue-300">Connect</button></Link>
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
