"use client";
import { downvoteService, upvoteService } from "@/lib/actions/service.action";
import { toggleSavedService } from "@/lib/actions/user.action";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  userId: string;
  serviceId: string;
  upvotes: number;
  downvotes: number;
  hasupVoted: boolean;
  hasdownVoted: boolean;
  hasSaved?: boolean;
}

const Votes = ({
  userId,
  serviceId,
  upvotes,
  downvotes,
  hasdownVoted,
  hasupVoted,
  hasSaved,
}: Props) => {
  const pathname = usePathname();
  const handleSave = async () => {
    await toggleSavedService({
      userId: JSON.parse(userId),
      serviceId: JSON.parse(serviceId),
      path: pathname,
    });
  };

  const handleVote = async (action: string) => {
    if (!userId) {
      return;
    }
    if (action === "upvote") {
      await upvoteService({
        serviceId: JSON.parse(serviceId),
        userId: JSON.parse(userId),
        hasdownVoted,
        hasupVoted,
        path: pathname,
      });
    }
    if (action === "downvote") {
      await downvoteService({
        serviceId: JSON.parse(serviceId),
        userId: JSON.parse(userId),
        hasdownVoted,
        hasupVoted,
        path: pathname,
      });
    }
  };
  return (
    <div className="flex items-center space-x-4">

      <div>
        <Image
          src={
            hasSaved
              ? "/assets/images/redheart.png"
              : "/assets/images/heart.png"
          }
          alt="save"
          width={30}
          height={30}
          className="cursor-pointer transition duration-300 hover:scale-110"
          onClick={handleSave}
        />
      </div>

      <div className="flex items-center space-x-1">
        <Image
          src={
            hasupVoted
              ? "/assets/images/likecolor.png"
              : "/assets/images/like.png"
          }
          alt="upvote"
          width={30}
          height={30}
          className="cursor-pointer transition duration-300 hover:scale-110"
          onClick={() => handleVote("upvote")}
        />
        <p className="text-gray-500">{upvotes}</p>
      </div>

      <div className="flex items-center space-x-1">
        <Image
          src={
            hasdownVoted
              ? "/assets/images/dislikecolor.png"
              : "/assets/images/dislike.png"
          }
          alt="downvote"
          width={30}
          height={30}
          className="cursor-pointer transition duration-300 hover:scale-110"
          onClick={() => handleVote("downvote")}
        />
        <p className="text-gray-500">{downvotes}</p>
      </div>
    </div>
  );
};

export default Votes;
