import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  };
  return (
    
    <footer className="bg-[#3F181C] text-white px-6 py-12" id="about">
      <div className="max-w-7xl pl-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div>
          <h2 className="text-[#fd8718] text-xl font-bold pb-3">About Us</h2>
          <p className="text-gray-200 max-w-[400px] leading-relaxed">
            We are committed to delivering high-quality solutions and services
            to meet your needs. Our mission is to empower your digital presence.
          </p>
        </div>

        <div>
          <h2 className="text-[#fd8718] text-xl font-bold pb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-200 hover:text-orange-400 transition" to="/">Home</Link>
            </li>

            <li>
            <button
            onClick={scrollToContact}
            className="text-gray-200 hover:text-orange-400 transition"
          >
            Contact
          </button>            </li>
            <li>
              <Link className="text-gray-200 hover:text-orange-400 transition" to="/support">Support</Link>
            </li>
            <li>
              <Link className="text-gray-200 hover:text-orange-400 transition" to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#fd8718] text-xl font-bold pb-3">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1"><IoLocation /></span>
              <p className="text-gray-200">Skirinkash Talkha Eldakahlia</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1"><FaPhone /></span>
              <p className="text-gray-200">+201070334275</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1"><MdEmail /></span>
              <p className="text-gray-200">husseinabdalla424@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/husseinabdalla010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Facebook"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7C2D23] text-base transition hover:bg-[#a23b30]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/Hussein99432152"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Twitter"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7C2D23] text-base transition hover:bg-[#a23b30]"
          >
            <RiTwitterFill />
          </a>
          <a
            href="https://www.instagram.com/husseinabdalla010/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7C2D23] text-base transition hover:bg-[#a23b30]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/hussein-abdalla-hussein"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our LinkedIn"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7C2D23] text-base transition hover:bg-[#a23b30]"
          >
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-sm text-gray-300 mt-4 opacity-75 hover:opacity-100 transition">
          Ⓒ 2024 Hussein Abdalla. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
