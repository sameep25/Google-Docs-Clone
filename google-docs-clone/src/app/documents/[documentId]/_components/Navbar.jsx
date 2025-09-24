import DocumentInput from "@/app/components/navbar_components/DocumentInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2 min-h-14">
      <div className="flex gap-2 items-center ">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={48} height={48} />
        </Link>

        <div>
          {/* Document Input */}
          <DocumentInput />
          {/* Menubar */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
