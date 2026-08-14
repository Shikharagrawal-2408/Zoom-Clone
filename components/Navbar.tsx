import React from "react";

import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

import {
  Show,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="fixed z-50 flex w-full items-center justify-between bg-dark-2 px-6 py-4 lg:px-10">
      
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="App logo"
        />

        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zoom Clone
        </p>
      </Link>

      <div className="flex items-center gap-5">
        <UserButton
  appearance={{
    variables: {
      colorForeground: "#ffffff",
      colorBackground: "#1c1f2e",
      colorMutedForeground: "#a5a5a5",
      colorPrimary: "#0E78F9",
      colorBorder: "#252a41",
    },
    elements: {
      userButtonPopoverCard: {
        backgroundColor: "#1c1f2e",
        color: "#ffffff",
      },
      userButtonPopoverActionButton: {
        color: "#ffffff",
      },
      userButtonPopoverActionButtonText: {
        color: "#ffffff",
      },
      userButtonPopoverActionButtonIcon: {
        color: "#ffffff",
      },
    },
  }}
/>

        <MobileNav />
      </div>

    </nav>
  );
};

export default Navbar;