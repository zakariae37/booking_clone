import Navbar from "@/components/shared/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-h-[400px] bg-blue-800">
      <div className="mx-auto max-w-screen-lg  py-2">
        <Navbar />
        <section className='flex min-h-screen flex-1 flex-col pb-6 pt-36 max-md:pb-14 '>
                <div className='mx-auto w-full max-w-5xl'>
                    {children}
                </div>
            </section>
      </div>
    </div>
  );
};

export default Layout;
