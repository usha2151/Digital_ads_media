import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarRef = useRef(null);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "OUR SERVICES", link: "/services" },
    { name: "PUBLISHERS", link: "/publisher" },
    { name: "ADVERTISER", link: "/advertisers" },
    { name: "CONTACT US", link: "/contact_us" },
    { name: "ABOUT US", link: "/" }
  ];

  let [open, setOpen] = useState(false);
  let [activeLink, setActiveLink] = useState("");
  let [isPrintHovered, setIsPrintHovered] = useState(false);

  // Function to handle scroll and change background color
  const handleScroll = () => {
    const navbar = navbarRef.current;

    if (navbar) {
      const scrollY = window.scrollY;
      const navbarHeight = navbar.clientHeight;
      const scrollThreshold = 100;
      const transitionDuration = "0.5s";

      if (scrollY > scrollThreshold) {
        navbar.style.transition = `background-color ${transitionDuration}, box-shadow ${transitionDuration}`;
        navbar.style.backgroundColor = "black"; // Change to your desired background color
        navbar.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"; // Add the desired shadow
      } else {
        navbar.style.transition = `background-color ${transitionDuration}, box-shadow ${transitionDuration}`;
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none"; // Remove the shadow when scrolling up
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setOpen(false);
  };

  const handlePrintLinkMouseEnter = () => {
    setIsPrintHovered(true);
  };

  const handlePrintLinkMouseLeave = () => {
    setIsPrintHovered(false);
  };

  return (
    <div
      ref={navbarRef}
      className="w-full fixed top-0 left-0 z-20"
    >
      <div className="md:flex text-white items-center container justify-between bg-transparent mx-auto xl:py-4 md:px-16 lg:px-10 xl:px-20 2xl:px-52 px-7">
        <div className=" cursor-pointer flex items-center">
          <Link to="/">
            <p className="text-h6">DIGITAL ADS MEDIA</p>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-0 bg-gray" : "top-[-460px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 md:my-0 my-7 text-h6 font-poppins  relative group"
            >
              <div
                onMouseEnter={() => link.name === "Print" && handlePrintLinkMouseEnter()}
                onMouseLeave={() => link.name === "Print" && handlePrintLinkMouseLeave()}
              >
                <Link
                  to={link.link}
                  className={`text-white group-hover:text-sky  font-poppins ${
                    activeLink === link.link
                      ? "font-bold text-sky border-b-2 border-blue"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(link.link)}
                >
                  {link.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
