import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  _id: string;
  title: string;
  location: string;
  price: number;
  category: string;
  image: string;
  views: number;
}
const ServiceCard = ({
  _id,
  title,
  location,
  price,
  category,
  image,
  views,
}: Props) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
      <Link href={`/servic/${_id}`} className="block">
        <div className="relative h-40 w-full">
          <Image
            src={image}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black opacity-0 transition-opacity hover:opacity-100">
            <p className="text-lg font-bold text-white">View Details</p>
          </div>
        </div>
        <div className="p-3">
          <h3 className="mb-1 text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-700">Location: {location}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800">{category}</p>
            <p className="text-sm text-gray-700">{views} reviews</p>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-800">
              Starting from{" "}
              <span className="text-xl font-bold">MAD {price}</span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
