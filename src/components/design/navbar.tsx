"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Text } from "../ui/Text";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MenuOpen from "@/../public/icons/menu.svg";
import MenuClose from "@/../public/icons/close.svg";

const Navbar = () => {
  const pathname = usePathname();
  const [MobileNavbar, setMobileNavbar] = useState(true);

  function handleClick() {
    console.log("clicked");
    setMobileNavbar(!MobileNavbar);
  }

  function mobileLinkHandleClick() {
    if (!MobileNavbar) {
      setMobileNavbar(!MobileNavbar);
    }
  }

  const navLinks = [
    { name: "Home", href: "/home", key: 0 },
    { name: "Events", href: "/events", key: 1 },
    { name: "FAQs", href: "/faqs", key: 2 },
    { name: "Contact Us", href: "/contact-us", key: 3 },
  ];

  return (
    <>
      <nav className="sticky top-0 bg-secondary z-50 lg:flex items-center justify-between w-full py-1 lg:py-3">
        <div className="flex justify-between items-center my-5">
          <div>
            <Text variant="h5">
              <Link href="/home">
                <span className="text-primary">Cerebria</span>&apos;24
              </Link>
            </Text>
          </div>
          {/* Mobile Navbar */}
          <div className="md:hidden mr-4">
            <button onClick={handleClick}>
              {MobileNavbar ? (
                <Image src={MenuOpen} alt="Menu Open" width={35} height={35} />
              ) : (
                <Image
                  src={MenuClose}
                  alt="Menu Close"
                  width={35}
                  height={35}
                />
              )}
            </button>
          </div>
        </div>
        <div className="">
          <div
            className={
              MobileNavbar
                ? "hidden md:flex md:z-0 md:relative md:top-0 md:w-auto justify-center items-center"
                : "bg-secondary p-5 w-full fixed z-30 h-full"
            }
          >
            {navLinks.map((nav, index) => {
              let isActive = pathname.startsWith(nav.href);
              if (nav.name === "Home" && pathname === "/") {
                isActive = true;
              }
              return (
                <div key={index}>
                  <Link href={nav.href} onClick={mobileLinkHandleClick}>
                    <Button
                      variant="link"
                      size="default"
                      className={isActive ? "underline !text-[#9615DB]" : ""}
                    >
                      {nav.name}
                    </Button>
                  </Link>
                </div>
              );
            })}
            <Link className="ml-5" href="https://forms.gle/T7LtKSLdBvUfUVuV7">
              <Button
                className="my-5 md:my-0"
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
