"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Text } from "../ui/Text";
// import Logo from "@/../public/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full mb-16 pt-3">
      <div className="">
        {/* <Image src={Logo} alt="Logo" width={60} height={30} /> */}
        <Text variant="h5">
          <span className="text-primary">Cerebria</span>&apos;24
        </Text>
      </div>
      <div className="flex gap-3 md:gap-5">
        <Link href="/home">
          <Button variant="link" size="default">
            Home
          </Button>
        </Link>
        <Link href="/events">
          <Button variant="link" size="default">
            Events
          </Button>
        </Link>
        <Link href="/faqs">
          <Button variant="link" size="default">
            FAQs
          </Button>
        </Link>
        <Link href="/contact-us">
          <Button variant="link" size="default">
            Contact Us
          </Button>
        </Link>
        <Link href="https://forms.gle/T7LtKSLdBvUfUVuV7">
          <Button variant="default" size="default" border="round">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
