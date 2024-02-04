"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Text } from "../ui/Text";
import { usePathname } from "next/navigation";
import { useState } from "react";
// import Logo from "@/../public/logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [MobileNavbar, setMobileNavbar] = useState(true);

  function handleClick() {
    setMobileNavbar(!MobileNavbar);
  }

  const navLinks = [
    { name: "Home", href: "/home", key: 0 },
    { name: "Events", href: "/events", key: 1 },
    { name: "FAQs", href: "/faqs", key: 2 },
    { name: "Contact Us", href: "/contact-us", key: 3 },
  ];

  return (
    <>
      <nav className="lg:flex items-center justify-between w-full py-3">
        <div className="flex justify-between">
          <div>
            {/* <Image src={Logo} alt="Logo" width={60} height={30} /> */}
            <Text variant="h5">
              <span className="text-primary">Cerebria</span>&apos;24
            </Text>
          </div>
          {/* Mobile Navbar */}
          <div className="md:hidden mb-2 mr-4">
            <button onClick={handleClick}>
              {MobileNavbar ? (
                <Image src={""} alt="Menu Open" width={35} height={35} />
              ) : (
                <Image src={""} alt="Menu Close" width={35} height={35} />
              )}
            </button>
          </div>
        </div>
        <div className="">
          <div
            className={
              MobileNavbar
                ? "hidden md:flex md:z-0 md:relative md:top-0 md:w-auto justify-center items-center"
                : "bg-black p-5 rounded-3xl w-full"
            }
          >
            {navLinks.map((nav, index) => {
              let isActive = pathname.startsWith(nav.href);
              if (nav.name === "Home" && pathname === "/") {
                isActive = true;
              }
              return (
                <div key={index}>
                  <Link href={nav.href}>
                    <Button
                      variant="link"
                      size="default"
                      className={isActive ? "underline text-[#9615DB]" : ""}
                      onClick={handleClick}
                    >
                      {nav.name}
                    </Button>
                  </Link>
                </div>
              );
            })}
            <Link className="ml-5" href="https://forms.gle/T7LtKSLdBvUfUVuV7">
              <Button
                variant="default"
                size="default"
                border="round"
                onClick={handleClick}
              >
                Register
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
