import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { NavbarLins } from "@/constants";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/images/menu.png"
          alt="menu"
          width={25}
          height={25}
        />
      </SheetTrigger>
      <SheetContent>
        <h1 className="mb-4 text-xl font-bold">More</h1>
        <div>
          {NavbarLins.map((link) => (
            <Link href={link.route} key={link.value}>
              <div className="flex items-center gap-2 rounded-md py-2 hover:bg-gray-100">
                <Image
                  src={link.icon}
                  alt={link.value}
                  width={25}
                  height={25}
                />
                <p>{link.value}</p>
              </div>
            </Link>
          ))}
          <SignedOut>
            <div className="mt-4">
              <Link href="/sign-up">
                <Button className="mb-2 block w-full rounded-md border border-blue-500 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Register
                </Button>
              </Link>
              <Link href="/sign-in">
                <Button className="block w-full rounded-md border border-blue-500 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
                  Sign In
                </Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
