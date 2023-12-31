"use client";
import React from "react";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "../../common/Button/Button";
import Image from "next/image";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showMenu && !event.target.closest(".mobile-menu-container")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <div className=" drop-shadow-2xl  backdrop-blur-lg shadow-xl bg-[#0505054b] w-full fixed top-0 left-0 py-2 z-50">
      <div className="">
        <div className="flex flex-row mx-auto justify-between items-center bg-bgGrey relative text-textWhite">
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Link href={"/"}>
              <Image
                className="w-[15rem] lg:w-[20rem] lg:pl-24 fles justify-start pl-3"
                src="/logo.png"
                alt="Eelvete Click"
              />
            </Link>
          </motion.div>
          <div className="lg:flex flex-row justify-center items-center gap-8 hidden  ">
            <Link
              href="/"
              className="font-semibold flex gap-1 items-center duration-300"
            >
              Home
            </Link>
            <div className="font-semibold flex gap-1 items-center group/Home">
              Services
              <svg
                className="group-hover/Home:ml-3 duration-300 mt-1 ml-1 "
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 21"
                fill="none"
              >
                <path
                  d="M1.79967 0L0.102051 2L7.5 9.99993L0.102051 17.5L1.79967 20.1002L11.9001 9.99993L1.79967 0Z"
                  fill="white"
                />
              </svg>
              {/* dropdown */}
              <div className="absolute top-[65%] py-6 left-0 w-screen bg-transperent invisible group-hover/Home:visible transition duration-300 text-white ">
                <div className="w-full backdrop-blur-xl ">
                  <div className=" bg-[#0c0713] backdrop-blur-xl  px-24 py-8">
                    <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center my-5">
                      <div className="grid-cols-2">
                        <div className="flex items-start gap-5">
                          <div className="mt-6">
                            <h1 className="text-3xl extrabold mb-4">
                              Our services{" "}
                            </h1>
                            <p className="text-sm">
                              Unlocking possibilities and exceeding expectations
                              through our comprehensive range of exceptional
                              services.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid-cols-2">
                        <div className="flex items-start gap-5">
                          <div>
                            <h1>SERVICES</h1>
                            <ul className="mt-6 space-y-4 text-sm">
                              <li>
                                <Link href="/pages/webdevservices" 
                                
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Web Development</Link>
                                
                                  
                              </li>
                              <li>
                                <Link href="/pages/contentservices
                                "
                                className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                >Content Management</Link>

                              </li>
                              <li>
                              <Link href="/pages/emailservices"
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Email services</Link>
                              
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="grid-cols-2">
                        <div className="flex items-start gap-5">
                          <div>
                            {/* <h1>SERVICES</h1> */}
                            <ul className="mt-[34px] space-y-4 text-sm">
                              <li>
                                <Link href="/pages/secservices"
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  > SEO Services</Link>
                              </li>
                              <li>
                                <Link href="/pages/socialservices"
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  > Social Media Managment</Link>
                              </li>
                              <li>
                                <Link href={"/pages/analyst" }
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Analytical Report</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* dropdown */}
            </div>
           
            <Link
              href="/pages/about"
              onClick={() => setShowMenu(false)}
              className="font-semibold flex gap-1 items-center group/Home"
            >
              About us
            </Link>
            <Link
              href="/pages/Contact"
              onClick={() => setShowMenu(false)}
              className="font-semibold flex gap-1 items-center group/Home"
            >
              Contact
            </Link>
            
          </div>
          <div className="hidden lg:flex mr-[5rem] justify-end w-[20%]">
            <Button text="Contact Us" className={"font-bold hover:bg-gradient-to-b from-purple-300 via-purple-900 to-pink-900 w-[10rem]"} href={"/pages/Contact"} />
          </div>
          <div
            className="block lg:hidden relative"
            onClick={() => {
              setShowMenu(showMenu === true ? false : true);
            }}
          >
            <svg
            className="text-[#ffffff]"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu / Menu_Alt_01">
                <path
                  id="Vector"
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`${
          showMenu
            ? "flex lg:hidden mobile-menu-container"
            : "hidden fixed top-[5%] lg:hidden transition-all duration-700 "
        }`}
      >
        <div className="my-5 mx-5">
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2 relative">
              <div className="flex gap-2 items-center group/Drops border-yellow-100">
                <p className="text-normal">
                <Link href="/pages/" onClick={() => { setShowMenu(false);}}  >Home</Link>

                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center ">
              <p className="text-normal">Services 
              </p>
              <svg
                className="group-hover/Home:ml-3 duration-300 mt-1 ml-1 rotate-90"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
                viewBox="0 0 12 21"
                fill="none"
              >
                <path
                  d="M1.79967 0L0.102051 2L7.5 9.99993L0.102051 17.5L1.79967 20.1002L11.9001 9.99993L1.79967 0Z"
                  fill="white"
                />
              </svg>
              {/* <BiChevronDown className="group-hover/Home:rotate-180 duration-300" /> */}
             
            </div>
            <ul className="text-sm flex flex-col gap-1 pl-3">
                              <li>
                                <Link href="/pages/webdevservices"
                                onClick={() => { setShowMenu(false);}} 
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Web Development</Link>
                                
                                  
                              </li>
                              <li>
                                <Link href="/pages/contentservices"
                                onClick={() => { setShowMenu(false);}} 
                                className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                >Content Management</Link>

                              </li>
                              <li>
                              <Link href="/pages/emailservices"
                              onClick={() => { setShowMenu(false);}} 
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Email Services</Link>
                              
                              </li>
                              <li>
                                <Link href="/pages/secservices"
                                onClick={() => { setShowMenu(false);}} 
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  > SEO Services</Link>
                              </li>
                              <li>
                                <Link href="/pages/socialservices"
                                onClick={() => { setShowMenu(false);}} 
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  > Social services</Link>
                              </li>
                              <li>
                                <Link href="/pages/analyst" 
                                onClick={() => { setShowMenu(false);}} 
                                  className="text-gray-100 hover:text-purple-100 transition hover:opacity-75"
                                  >Analytical Report</Link>
                              </li>
                            </ul>
            
            <div className="flex gap-4 items-center">
              <p className="text-normal">
              <Link href="/pages/about" onClick={() => setShowMenu(false)} >About us</Link>
              </p>
              {/* <BiChevronDown className="group-hover/Home:rotate-180 duration-300" /> */}
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-normal">
                <Link href="/pages/Contact" onClick={() => setShowMenu(false)} >Contact</Link>
              </p>

              {/* <BiChevronDown className="group-hover/Home:rotate-180 duration-300" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
