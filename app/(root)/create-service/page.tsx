import React from "react";
import ServiceForm from "@/components/form/ServiceForm"
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const Page = async () => {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }
 
  const mongoUser = await getUserById({userId})
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add your service</h1>
      <ServiceForm mongoUserId={JSON.stringify(mongoUser._id)}/>
    </div>
  );
};

export default Page;
