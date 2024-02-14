import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-md">
      <div className="mr-4">
        <h2 className="text-xl font-semibold">Take your longest holiday yet</h2>
        <p className="text-gray-600">
          Browse properties offering long-term stays, many at reduced monthly
          rates
        </p>
        <Link href="/">
          <Button className="mt-2 bg-blue-800">Find a stay</Button>
        </Link>
      </div>
      <div>
        <Image
          src="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
          alt="stay"
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default Offer;
