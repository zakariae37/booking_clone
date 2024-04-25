import Votes from "@/components/shared/Votes";
import { Badge } from "@/components/ui/badge";
import { getServiceById } from "@/lib/actions/service.action";
import { getUserById } from "@/lib/actions/user.action";
import { ParamsProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";


const page = async ({ params }: ParamsProps) => {
  const { userId: clerkId } = auth();
  const result = await getServiceById({ serviceId: params.id });
  const mongoUser = await getUserById({ userId: clerkId });
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-screen-lg">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{result.title}</h1>
              <div className="mt-2 flex items-center gap-2">
                <Image
                  src="/assets/images/location.png"
                  alt="location"
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="text-gray-600">{result.location.name}</p>
              </div>
            </div>
            <Votes
              userId={JSON.stringify(mongoUser._id)}
              serviceId={JSON.stringify(result._id)}
              upvotes={result.upvotes.length}
              downvotes={result.downvotes.length}
              hasupVoted={result.upvotes.includes(mongoUser._id)}
              hasdownVoted={result.downvotes.includes(mongoUser._id)}
              hasSaved={mongoUser?.saved.includes(result._id)}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={result.image}
              alt={result.title}
              width={400}
              height={400}
              className=" rounded-md object-cover"
            />
          </div>
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold">Amenities</h2>
            <div className="flex gap-4 rounded-md p-2">
              {result.amenities.map((amentie: any) => (
                <Badge key={amentie} className="bg-slate-600 px-6 py-1">
                  {amentie}
                </Badge>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold">Description</h2>
            <p className="text-gray-600">{result.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
