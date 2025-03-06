import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/ico_user.png";
const Header = () => {
  return (
    <div className="flex items-center w-[1280px] justify-between mx-auto">
      <div>
        <img
          className=""
          src={logo}
          alt=""
        />
      </div>
      <div>
        <ul className="text-white flex items-center text-base gap-[20px]   ">
          <li className=" mx-5 py-3 relative after:duration-300 after:absolute after:w-full after:scale-x-0 hover:after:scale-100 after:transition-all after:h-[2px] after:left-0 after:bottom-0 after:bg-white">Marketplace</li>
          <li className=" mx-5 py-3 relative after:duration-300 after:absolute after:w-full after:scale-x-0 hover:after:scale-100 after:transition-all after:h-[2px] after:left-0 after:bottom-0 after:bg-white">Rankings</li>
          <li className=" mx-5 py-3 relative after:duration-300 after:absolute after:w-full after:scale-x-0 hover:after:scale-100 after:transition-all after:h-[2px] after:left-0 after:bottom-0 after:bg-white">Connect a wallet</li>
          <li className=" px-5 py-3   " >
            <button className="bg-[#A259FF] text-white p-2 d flex items-center justify-center w-[152px] h-[62px] gap-3 text-[16px] font-bold rounded-[20px]">
              <img className=" overflow-hidden object-contain size-5" src={user} alt="" /> 
              <span>Sign Up</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
