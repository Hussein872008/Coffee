import { Link } from "react-router-dom";
import { logo } from "../assets";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [openBar, setOpenBar] = useState(false);
  const scrollToAbout = () => {
    const contactSection = document.getElementById('about');
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-[#3F181C] h-[80px] sticky top-0 z-50 shadow-md px-[50px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-white flex items-center gap-2 ">
          <Link to="/"><img src={logo} className="w-10" alt="logo" /></Link>
          <h1 className="text-3xl font-bold">Coffe</h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-white">
          <li className="px-2 hover:bg-[#7b3f45ad] transition duration-500 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:bg-[#7b3f45ad] transition duration-500 rounded">
          <button
            onClick={scrollToAbout}
            className="transition"
          >
            About
          </button>          </li>
          <li className="px-2 hover:bg-[#7b3f45ad] transition duration-500 rounded">
          <button
            onClick={scrollToContact}
            className="transition"
          >
            Contact
          </button>           </li>
          <li className="px-2 hover:bg-[#7b3f45ad] transition duration-500 rounded">
            <Link to="/support">Support</Link>
          </li>
          <li className="px-2 hover:bg-[#7b3f45ad] transition duration-500 rounded">
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        <div className="hidden md:flex">
          <button className="bg-transparent px-4 py-2 rounded font-medium border text-white border-white hover:border-orange-400 hover:text-orange-400 transition duration-300">
            Get Started
          </button>
        </div>

        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar ? <FaBars fontSize="20px" /> : <IoMdClose fontSize="20px" />}
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 bg-[#3F181C]/95 backdrop-blur-md w-[200px] h-full transform ${
          openBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div
          className="absolute top-4 left-2 text-white cursor-pointer"
          onClick={() => setOpenBar(false)}
        >
          <IoMdClose fontSize="24px" />
        </div>

        <ul className="flex flex-col gap-6 text-white px-4 mt-16">
          <li className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
          <button
            onClick={scrollToAbout}
            className="transition"
          >
            About
          </button>           </li>
          <li className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
          <button
            onClick={scrollToContact}
            className="transition"
          >
            Contact
          </button>           </li>
          <li className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
            <Link to="/support">Support</Link>
          </li>
          <li className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="text-white flex flex-col mt-7 px-4 gap-4">
          <button className="bg-transparent px-4 py-2 rounded font-medium border text-white border-white hover:border-orange-400 hover:text-orange-400 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
