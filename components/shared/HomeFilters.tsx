"use client"
import { Homefilters } from "@/constants";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const HomeFilters = () => {
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
    if (startIndex < Homefilters.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="mb-4 text-2xl font-bold">Browse by property type</h1>
      <div className="relative flex w-full items-center justify-center">
        {startIndex > 0 && (
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 border-none bg-transparent/30 outline-none focus:outline-none"
            onClick={showPrevious}
          >
            <FaArrowLeft size={20} />
          </Button>
        )}
        <div className="flex space-x-4 overflow-hidden">
          {Homefilters.slice(startIndex, startIndex + (isSmallDevice ? 2 : 4)).map((item) => (
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
        {startIndex < Homefilters.length - 1 && (
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 border-none bg-transparent/30 outline-none focus:outline-none"
            onClick={showNext}
          >
            <FaArrowRight size={20} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeFilters;
