"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import GlobalResult from "./GlobalResult";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

interface Props {
  route: string;
  placeholder: string;
}
const GlobalSearchBar = ({ route, placeholder }: Props) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const query = searchParams.get("global")
  const [search, setSearch] = useState(query || "")
  const [ isOpen, setIsOpen ] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'global',
          value: search
        })
        router.push(newUrl, { scroll: false })
      }else{
        if (query) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["global"]
          })
          router.push(newUrl, { scroll: false })
        }
      }
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [router, pathname, searchParams, query, search])
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
          value={search}
          onChange={(e) => {setSearch(e.target.value);
            if (!isOpen) {
              setIsOpen(true)
            }
            if (e.target.value === "" && isOpen) {
              setIsOpen(false)
            }
          }}
        />
        <Button className="bg-blue-800 hover:bg-blue-700">Search</Button>
      </div>
      {isOpen && <GlobalResult />}
    </div>
  );
};

export default GlobalSearchBar;
