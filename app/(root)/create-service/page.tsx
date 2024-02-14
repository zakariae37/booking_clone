import React from "react";
import ServiceForm from "@/components/form/ServiceForm"
import { getUserById } from "@/lib/actions/user.action";
const Page = async () => {
  const userId = 'dummy-user-id'
 
  const mongoUser = await getUserById({userId})
  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Add your service</h1>
      <ServiceForm mongoUserId={JSON.stringify(mongoUser)}/>
    </div>
  );
};

export default Page;
