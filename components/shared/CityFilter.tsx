"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { CityFilters } from "@/constants";

const CityFilter = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const showNext = () => {
    if (startIndex < CityFilters.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };
  return (
    <div className="mt-10">
      <h1 className="mb-4 text-2xl font-bold">Browse by property type</h1>
      <div className="relative flex w-full items-center justify-center">
        {startIndex > 0 && (
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border-none bg-transparent/30 outline-none focus:outline-none"
            onClick={showPrevious}
          >
            <FaArrowLeft />
          </Button>
        )}
        <div className="flex space-x-4 overflow-hidden">
          {CityFilters.slice(startIndex, startIndex + (isSmallDevice ? 3 : 6)).map((item) => (
            <Button
              key={item.value}
              className="flex size-full flex-col items-center justify-center border-none bg-white outline-none hover:bg-white focus:outline-none"
            >
              <div className="size-full">
                <Image
                  src={item.image}
                  alt={item.value}
                  width={150}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <p className="mt-2 text-sm font-bold text-gray-800">
                {item.value}
              </p>
            </Button>
          ))}
        </div>
        {startIndex < CityFilters.length - 6 && (
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full border-none bg-transparent/30 outline-none focus:outline-none"
            onClick={showNext}
          >
            <FaArrowRight />
          </Button>
        )}
      </div>
    </div>
  );
};

export default CityFilter;
