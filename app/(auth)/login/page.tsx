"use client";
import { SignIn } from "@clerk/clerk-react";

const Page = () => {
  return (
    <div className="flex w-dvw h-dvh justify-center items-center">
      <SignIn />
    </div>
  );
};

export default Page;
