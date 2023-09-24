import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "OUR SERVICES", link: "/print" },
    { name: "PUBLISHERS", link: "/digital" },
    { name: "ADVERTISER", link: "/blog" },
    { name: "CONTACT US", link: "/contact" },
    { name: "ABOUT US", link: "/blog" }
  ];

  let [open, setOpen] = useState(false);
  let [activeLink, setActiveLink] = useState(""); // Track active link
  let [isPrintHovered, setIsPrintHovered] = useState(false); // Track hover state for "Print" link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpen(false); // Close the mobile menu after clicking a link
  };

  const handlePrintLinkMouseEnter = () => {
    setIsPrintHovered(true);
  };

  const handlePrintLinkMouseLeave = () => {
    setIsPrintHovered(false);
  };

  return (
    <div
      className="w-full fixed top-0 left-0 z-20"
    >
      <div className="md:flex text-white items-center container justify-between bg-transparent mx-auto xl:py-4 md:px-16 lg:px-10 xl:px-20 2xl:px-52 px-7">
        <div className=" cursor-pointer flex items-center">
          <Link to="/">
            <p className="text-h6">DIGITAL ADS MEDIA</p>
            {/* <img src={wmh} alt="" className="xl:h-[80px] h-[60px]" /> */}
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-10 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 text-h6 font-poppins relative group"
            >
              <div
                onMouseEnter={() => link.name === "Print" && handlePrintLinkMouseEnter()}
                // onMouseLeave={() => link.name === "Print" && handlePrintLinkMouseLeave()}
              >
                <Link
                  to={link.link}
                  className={`text-white group-hover:text-red font-poppins ${
                    activeLink === link.link
                      ? "font-bold text-red border-b-2 border-red"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(link.link)}
                >
                  {link.name}
                </Link>
                {/* Render the card with two list items only when hovering over "Print" */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;