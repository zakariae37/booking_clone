import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface Props {
  route: string;
  placeholder: string;
}
const GlobalSearchBar = ({ route, placeholder }: Props) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-1 rounded-lg bg-orange-400 p-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Image
            src="/assets/images/bed.png"
            alt="icon"
            width={20}
            height={20}
          />
        </div>
        <Input
          type="text"
          placeholder={placeholder}
          className="w-full border border-gray-300 py-2 pl-10 pr-4"
          style={{ outline: "none" }}
        />
        <Button className="bg-blue-800 hover:bg-blue-700">Search</Button>
      </div>
    </div>
  );
};

export default GlobalSearchBar;
