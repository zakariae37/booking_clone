import { footerLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 text-blue-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((link) => (
            <div key={link.value}>
              <Link href={link.route}>
                <p className="block text-sm transition duration-300 hover:text-gray-400">
                  {link.value}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
