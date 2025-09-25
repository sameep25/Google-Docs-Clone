import DocumentInput from "@/app/components/navbar_components/DocumentInput";
import NavMenu from "@/app/components/navbar_components/NavMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <div className="flex gap-2 items-center  ">
        <Link href="/">
          <Image
            className="animate-spin"
            src="/logo.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>

        <div>
          {/* Document Input */}
          <DocumentInput />

          {/* Menubar */}
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
