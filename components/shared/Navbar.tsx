import { NavbarLins } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        <Link href='/' className="text-2xl font-bold text-white">
          Booking.com
        </Link>
      </div>
      <div className="hidden gap-4 md:flex">
        {NavbarLins.map((link) => (
          <Link
            key={link.value}
            href={link.route}
            className="flex items-center gap-1 rounded-full px-3 py-1 text-white transition duration-300 ease-in-out hover:bg-transparent/10"
          >
            <Image src={link.icon} alt={link.value} width={20} height={20} />
            {link.value}
          </Link>
        ))}
        <SignedOut>
          <div className="flex gap-4">
            <Link href="/sign-up">
              <Button className="bg-white text-blue-700 hover:bg-gray-100">
                Register
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button className="bg-white text-blue-700 hover:bg-gray-100">
                Sign In
              </Button>
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
