import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  link: string;
  linkTitle: string;
}

const NotFound = ({ link, linkTitle }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center" >
      <div>
        <Image
          src="/assets/images/noresult.jpg"
          alt="not-found"
          width={200}
          height={200}
        />
      </div>
      <Link href={link}>
        <Button>{linkTitle}</Button>
      </Link>
    </div>
  );
};

export default NotFound;
