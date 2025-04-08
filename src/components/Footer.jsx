import { Link } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";

const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact", path: "/contact" },
  { id: 4, page: "Support", path: "/support" },
  { id: 5, page: "Pricing", path: "/pricing" },
];

const icons = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://twitter.com", icon: <RiTwitterFill />, label: "Twitter" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-[#3F181C] text-white px-6 py-12">
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
            {Links.map((item) => (
              <li key={item.id}>
                <Link
                  className="text-gray-200 hover:text-orange-400 transition"
                  to={item.path}
                >
                  {item.page}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[#fd8718] text-xl font-bold pb-3">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1"><IoLocation /></span>
              <p className="text-gray-200">123 Street Name, City, Country</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1"><FaPhone /></span>
              <p className="text-gray-200">+123 456 7890</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1"><MdEmail /></span>
              <p className="text-gray-200">support@example.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          {icons.map(({ href, icon, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${label}`}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7C2D23] text-base transition hover:bg-[#a23b30]"
            >
              {icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-300 mt-4 opacity-75 hover:opacity-100 transition">
          Ⓒ 2024 Hussein Abdalla. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
