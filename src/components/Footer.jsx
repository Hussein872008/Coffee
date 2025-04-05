import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
];

const icons = [
  { href: "https://facebook.com", icon: <FaFacebookF /> },
  { href: "https://twitter.com", icon: <RiTwitterFill /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://linkedin.com", icon: <FaLinkedinIn /> },
];

const Footer = () => {
  return (
    <div className="bg-[#3F181C]">
      <div className="container  mx-auto  grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-10 ">
        <div>
          <h1 className="text-[#fd8718] text-xl font-bold pb-3">About Us</h1>
          <p className="text-gray-200 max-w-[350px]">
            We are committed to delivering high-quality solution and services to
            meet your needs. Our mission is to empower your digital presence.
          </p>
        </div>

        <div>
          <h1 className="text-[#fd8718] text-xl font-bold pb-3">Quick Lins</h1>

          <ul className="text-gray-200">
            {Links.map((item) => (
              <li key={item.id}>
                <Link className="hover:text-gray-600" to={item.path}>
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="text-[#fd8718] text-xl font-bold pb-3">Contact Us</h1>
          <div className="flex flex-col">
            <div className="flex items-center pb-3">
              <i className="text-orange-500 pr-2">
                <IoLocation />
              </i>
              <h1 className="text-gray-200 ">123 Street Name, City, Country</h1>
            </div>

            <div className="flex items-center pb-3">
              <i className="text-orange-500 pr-2">
                <FaPhone />
              </i>

              <h1 className="text-gray-200">+123 456 7890</h1>
            </div>

            <div className="flex items-center pb-3">
              <i className="text-orange-500 pr-2">
                <MdEmail />
              </i>

              <h1 className="text-gray-200">support@example.com</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 p-4 text-white">
        <div className="flex gap-3 ">
          {icons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7C2D23] text-base cursor-pointer transition duration-300 hover:bg-[#a23b30]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <h1 className="text-sm mt-2 opacity-75">
          Ⓒ 2024 Hussein Abdalla. All Rights Reserved.
        </h1>
      </div>

    </div>
  );
};

export default Footer;