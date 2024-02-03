"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full mb-16 pt-3">
      <div className="">
        <Image src={""} alt="Logo" />
      </div>
      <div className="flex gap-3 md:gap-5">
        <Button variant="link" size="default">
          Create Post
        </Button>
        <Button variant="default" size="default" border="round">
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
