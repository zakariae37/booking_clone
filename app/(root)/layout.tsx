"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  

  return (
    <div className={`bg-blue-800 ${pathname === '/' ? "h-[400px]" : "h-[100px]"}`}>
      <div className="mx-auto max-w-screen-lg py-2">
        <Navbar />
        <section className="flex min-h-screen flex-1 flex-col pb-6 pt-36 max-md:pb-14 ">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
